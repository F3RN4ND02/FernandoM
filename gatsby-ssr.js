import React from "react"
import { DarkModeState } from "./src/Styles/ThemeHandler"
export function wrapRootElement({ element, props }) {
  return <DarkModeState {...props}>{element}</DarkModeState>
}