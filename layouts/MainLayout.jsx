import React from 'react'
import Footer from '../components/Footer'
import TopNavbar from '../components/TopNavbar'

export default function MainLayout({children}) {
  return (
    <>
        <TopNavbar/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}
