import React from 'react'
import NavBarItems from './navBar'
import Footer from './footer'
import MainPage from './mainPageComponents/mainPage'

function AllPage() {
  return (
    <>
      <NavBarItems />
      <main class="main">
        <MainPage />
      </main>
      <Footer />
    </>
  )
}

export default AllPage
