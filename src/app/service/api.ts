import axios from "axios"
import { baseUrl } from "../../utils/constants"

export const axiosInstance = axios.create({
  baseURL: baseUrl,
})
