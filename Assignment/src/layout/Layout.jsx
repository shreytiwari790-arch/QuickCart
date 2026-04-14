import React from 'react'
import Navbar from '../components/Navbar'
import Fotter from './Fotter'

const Layout = ({ children, search, setSearch }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar search={search} setSearch={setSearch} />
      <main className="flex-grow">
        {children}
      </main>
      <Fotter />
    </div>
  )
}

export default Layout
