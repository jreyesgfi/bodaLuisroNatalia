import './theme/globalFonts.css'
import { Fragment} from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './theme/globalStyles'
import { HomePage } from './pages/HomePage'
import { ConfirmationPage } from './pages/ConfirmationPage/ConfirmationPage'

import AnimatedPage, { withAnimation } from './theme/components/AnimatedPage'
import { AnimatePresence } from 'framer-motion'
import { IntroPage } from './pages/Intro/IntroPage'
import { OurHistoryPage } from './pages/OurHistory/OurHistoryPage'

const App = (): JSX.Element => {

  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <AnimatedPage>
          <Routes>
            <Route index element={withAnimation(IntroPage)({})} />
            <Route path="/home" element={withAnimation(HomePage)({})} />
            <Route path="/asistencia" element={withAnimation(ConfirmationPage)({})} />
            <Route path="/nuestra-historia" element={withAnimation(OurHistoryPage)({})} />
          </Routes>
        </AnimatedPage>
      </BrowserRouter>
    </Fragment >

  )
}

export default App
