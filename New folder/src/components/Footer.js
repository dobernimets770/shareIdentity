import React from 'react'

export default function Footer({ footereData }) {
  const { themeColorHard } = footereData

  return (
    <footer style={{backgroundColor:themeColorHard}}></footer>
  )
}
