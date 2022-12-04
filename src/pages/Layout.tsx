import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Globals/Footer'
import Header from '../Components/Globals/Header'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div>
        <Header />
            <Outlet />
        <Footer />
    </div>
  )
}

export default Layout