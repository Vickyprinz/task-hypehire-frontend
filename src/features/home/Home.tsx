import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import MainBanner from "./components/MainBanner"
import MainShortcut from "./components/MainShortcut"
import { getMainExhibitionAsync } from "./homeAsync"
import { ProductCardList } from "./components/ProductCardList"

export const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { mainExhibition } = useAppSelector(state => state.home)
  useEffect(() => {
    dispatch(getMainExhibitionAsync())
  }, [dispatch])

  const single = useMemo(() => {
    return mainExhibition?.items.filter(
      item => item.type === "SINGLE" && item.viewType === "TILE",
    )
  }, [mainExhibition])

  return (
    <>
      <MainBanner />
      <MainShortcut />
      {single &&
        single.map(item => {
          return <ProductCardList items={item} key={item.id} />
        })}
    </>
  )
}
