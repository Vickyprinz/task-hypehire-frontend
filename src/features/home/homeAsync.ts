import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  getMainBannerAPI,
  getMainShortcutAPI,
  getMainExhibitionAPI,
} from "./homeApi"

export const getMainBannerAsync = createAsyncThunk("MainBanner", async () => {
  try {
    const response = await getMainBannerAPI()
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
})

export const getMainShortcutAsync = createAsyncThunk(
  "MainShortcut",
  async () => {
    try {
      const response = await getMainShortcutAPI()
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  },
)

export const getMainExhibitionAsync = createAsyncThunk(
  "MainExhibition",
  async () => {
    try {
      const response = await getMainExhibitionAPI()
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  },
)
