import React from 'react'


export default function Article({ articleData }) {
  const {themeColorSoft} = articleData
  return (
    <article style={{backgroundColor:themeColorSoft,}}>
      <section className='location'>
      </section>
      <section className='files'>
      </section>
    </article>
  )
}
