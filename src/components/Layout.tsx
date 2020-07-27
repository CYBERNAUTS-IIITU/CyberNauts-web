import React, { ReactElement } from 'react'
import '../styles/style.css';


interface Props {
  children?: ReactElement;
}

function Layout({children}: Props): ReactElement {
  return (
    <>
      {children}
    </>
  )
}

export default Layout
