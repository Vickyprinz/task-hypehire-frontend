import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getMainShortcutAsync } from "../homeAsync"

export default function MainShortcut() {
  const dispatch = useAppDispatch()
  const { mainShortcut } = useAppSelector(state => state.home)
  useEffect(() => {
    dispatch(getMainShortcutAsync())
  }, [dispatch])
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  ">
      <div className="grid grid-cols-5 gap-[12px] md:grid-cols-10 mt-[40px]">
        {mainShortcut.map(shortcut => (
          <div
            key={shortcut.mainShortcutId}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <img
                src={shortcut.imageUrl}
                alt={shortcut.title}
                className="w-[62px] h-[62px]"
              />
              <p className="text-[11px] md:text-[13px]">{shortcut.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
