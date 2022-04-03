import React from 'react'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoBanner from '../components/LogoBanner'
import Modal from '../components/Modal'
import SlidePhotos from '../components/SlidePhotos'
import { dataSlide, dataCardIcon, dataExplore } from '../data'
import { ModalContext } from '../context'

const Home = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="relative overflow-hidden w-full">
      <ModalContext.Provider value={{modal, setModal}}>
        <Header />
        <Hero />
        <LogoBanner />
        <SlidePhotos dataSlide={dataSlide} dataCardIcon={dataCardIcon} />
        <Explore dataExplore={dataExplore} />
        <Footer />
        {modal && <Modal />}
      </ModalContext.Provider>
    </div>
  )
}

export default Home