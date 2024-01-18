import './theme/globalFonts.css'
import { Fragment, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './theme/globalStyles'
import { HomePage } from './pages/HomePage'
import { ConfirmationPage } from './pages/ConfirmationPage/ConfirmationPage'

import AnimatedPage from './theme/components/AnimatedPage'
import { AnimatePresence } from 'framer-motion'
import { IntroPage } from './pages/Intro/IntroPage'

const App = (): JSX.Element => {

  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <AnimatedPage>
          <Routes>
            <Route index element={
              <AnimatedPage>
                <IntroPage />
              </AnimatedPage>
            } />
            <Route path="/home" element={
              <AnimatedPage>
                <HomePage />
              </AnimatedPage>
            } />
            <Route path="/asistencia" element={
              <AnimatedPage>
                <ConfirmationPage />
              </AnimatedPage>
            } />
            <Route path="/nuestra-historia" element={
              <AnimatedPage>
                <IntroPage />
              </AnimatedPage>
            } />
          </Routes>
        </AnimatedPage>
      </BrowserRouter>
    </Fragment >

  )
}

export default App
