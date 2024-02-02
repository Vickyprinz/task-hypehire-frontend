import { createSlice } from "@reduxjs/toolkit"
import {
  getMainBannerAsync,
  getMainShortcutAsync,
  getMainExhibitionAsync,
} from "./homeAsync"
import type {
  Collections,
  MainBannerResponse,
  MainShortcutResponse,
} from "./types"

interface HomeState {
  mainBanner: MainBannerResponse[]
  mainShortcut: MainShortcutResponse[]
  mainExhibition: Collections | undefined
  bannerStatus: "idle" | "loading" | "rejected" | "fulfilled"
  shortcutStatus: "idle" | "loading" | "rejected" | "fulfilled"
  exhibitionStatus: "idle" | "loading" | "rejected" | "fulfilled"
  bannerError: string | undefined
  shortcutError: string | undefined
  exhibitionError: string | undefined
}

const initialState: HomeState = {
  mainBanner: [],
  mainShortcut: [],
  mainExhibition: undefined,
  bannerStatus: "idle",
  shortcutStatus: "idle",
  exhibitionStatus: "idle",
  bannerError: undefined,
  shortcutError: undefined,
  exhibitionError: undefined,
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // MainBanner
      .addCase(getMainBannerAsync.pending, state => {
        state.bannerStatus = "loading"
      })
      .addCase(getMainBannerAsync.fulfilled, (state, action) => {
        state.bannerStatus = "fulfilled"
        state.mainBanner = action.payload
      })
      .addCase(getMainBannerAsync.rejected, (state, action) => {
        state.bannerStatus = "rejected"
        state.bannerError = action.error.message
      })
      // MainShortcut
      .addCase(getMainShortcutAsync.pending, state => {
        state.shortcutStatus = "loading"
      })
      .addCase(getMainShortcutAsync.fulfilled, (state, action) => {
        state.shortcutStatus = "fulfilled"
        state.mainShortcut = action.payload
      })
      .addCase(getMainShortcutAsync.rejected, (state, action) => {
        state.shortcutStatus = "rejected"
        state.shortcutError = action.error.message
      })
      // MainExhibition
      .addCase(getMainExhibitionAsync.pending, state => {
        state.exhibitionStatus = "loading"
      })
      .addCase(getMainExhibitionAsync.fulfilled, (state, action) => {
        state.exhibitionStatus = "fulfilled"
        state.mainExhibition = action.payload
      })
      .addCase(getMainExhibitionAsync.rejected, (state, action) => {
        state.exhibitionStatus = "rejected"
        state.exhibitionError = action.error.message
      })
  },
})
