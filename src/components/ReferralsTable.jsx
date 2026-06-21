import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { getReferrals } from "../services/api";

const ReferralsTable = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("desc");

  const [rows, setRows] = useState([]);

  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const fetchData = async () => {
    try {
      const result = await getReferrals(search, sort);

      const data = result.data?.referrals || result.data || [];

      setRows(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, sort]);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const start = (page - 1) * rowsPerPage;

  const end = start + rowsPerPage;

  const currentRows = rows.slice(start, end);

  const formatDate = (date) => {
    return date.replaceAll("-", "/");
  };

  const formatProfit = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section>
      <h2>All referrals</h2>

      <div className="controls">
        <input
          placeholder="Name or service…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="desc">Newest first</option>

          <option value="asc">Oldest first</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.length === 0 ? (
            <tr>
              <td colSpan="4">No matching entries</td>
            </tr>
          ) : (
            currentRows.map((row) => (
              <tr key={row.id} onClick={() => navigate(`/referral/${row.id}`)}>
                <td>{row.name}</td>

                <td>{row.serviceName}</td>

                <td>{formatDate(row.date)}</td>

                <td>{formatProfit(row.profit)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      <p>
        Showing {start + 1}–{Math.min(end, rows.length)} of {rows.length}{" "}
        entries
      </p>
    </section>
  );
};

export default ReferralsTable;
