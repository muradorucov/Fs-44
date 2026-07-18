import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
      <Helmet>
        <title>About Page Title</title>
        <meta name="description" content="About Page Description" />
        <link rel="canonical" href="http://1kod.az/about" />
      </Helmet>
      <main>
        <img src="/icons.svg"
          alt="Lorem lorem lorem"
          width={"400px"}
          height={"1000px"}
          className='w-100 h-250' 
          />
      </main>
    </>
  )
}

export default About