import React from 'react'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoBanner from '../components/LogoBanner'
import Modal from '../components/Modal'
import SlidePhotos from '../components/SlidePhotos'
import { dataSlide, dataCardIcon, dataExplore } from '../data'
import { GlobalContext } from '../context'

const Home = () => {
  const [modal, setModal] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  return (
    <div className="relative overflow-hidden w-full">
      <GlobalContext.Provider value={{modal, setModal, menu, setMenu}}>
        <Header />
        <Hero />
        <LogoBanner />
        <SlidePhotos dataSlide={dataSlide} dataCardIcon={dataCardIcon} />
        <Explore dataExplore={dataExplore} />
        <Footer />
        {modal && <Modal />}
      </GlobalContext.Provider>
    </div>
  )
}

export default Home