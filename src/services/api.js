import axios from "axios"
import Cookies from "js-cookie"

const BASE_URL =
  "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api"

export const loginUser = async (email, password) => {
  const response = await axios.post(
    `${BASE_URL}/auth/signin`,
    {
      email,
      password,
    }
  )

  return response.data
}

export const getReferrals = async (
  search = "",
  sort = "desc"
) => {
  const token = Cookies.get("jwt_token")

  const response = await axios.get(
    `${BASE_URL}/referrals`,
    {
      params: {
        search,
        sort,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

export const getReferralById = async id => {
  const token = Cookies.get("jwt_token")

  const response = await axios.get(
    `${BASE_URL}/referrals?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}