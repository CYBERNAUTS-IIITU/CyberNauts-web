import React, { ReactElement } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

interface Props {
  children?: ReactElement;
}

function Layout({children}: Props): ReactElement {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
    </>
  )
}

export default Layout
