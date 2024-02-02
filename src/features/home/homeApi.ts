import { axiosInstance } from "../../app/service/api"
import type {
  Collections,
  MainBannerResponse,
  MainShortcutResponse,
} from "./types"

export const getMainBannerAPI = async () => {
  try {
    const response =
      await axiosInstance.get<MainBannerResponse[]>("/main-banner/all")

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getMainShortcutAPI = async () => {
  try {
    const response =
      await axiosInstance.get<MainShortcutResponse[]>("/main-shortcut/all")

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getMainExhibitionAPI = async () => {
  try {
    const response = await axiosInstance.get<Collections>(
      "/collections?prearrangedDiscount",
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
