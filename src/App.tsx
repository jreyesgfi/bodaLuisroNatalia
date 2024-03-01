import './theme/globalFonts.css'
import { Fragment, useEffect} from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './theme/globalStyles'
import { HomePage } from './pages/HomePage/HomePage'
import { PlanningPage } from './pages/PlanningPage/PlanningPage'
import { ConfirmationPage } from './pages/ConfirmationPage/ConfirmationPage'
import { LocationPage } from './pages/LocationPage/LocationPage'
import { GalleryPage } from './pages/GalleryPage/GalleryPage'

import AnimatedPage, { withAnimation } from './theme/components/AnimatedPage'
import { IntroPage } from './pages/Intro/IntroPage'
import { OurHistoryPage } from './pages/OurHistory/OurHistoryPage'
import { receiveData } from './connection/connectionMethods'
import { ListOfGuests } from './types'
import { useCustomNavigate } from './theme/customHooks/useCustomNavigate'

const App = (): JSX.Element => {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <AnimatedPage>
          <Routes>
            <Route index element={withAnimation(HomePage)({})} />
            <Route path="/introduccion" element={withAnimation(IntroPage)({})} />
            <Route path="/home" element={withAnimation(HomePage)({})} />
            <Route path="/asistencia" element={withAnimation(ConfirmationPage)({})} />
            <Route path="/nuestra-historia" element={withAnimation(OurHistoryPage)({})} />
            <Route path="/planning" element={withAnimation(PlanningPage)({})} />
            <Route path="/como-llegar" element={withAnimation(LocationPage)({})} />
            <Route path="/galeria" element={withAnimation(GalleryPage)({})} />
          </Routes>
        </AnimatedPage>
      </BrowserRouter>
    </Fragment >

  )
}

export default App
