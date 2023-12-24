import './theme/globalFonts.css'
import { Fragment, useEffect} from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalStyles from './theme/globalStyles'
import { HomePage } from './pages/HomePage'
import { ConfirmationPage } from './pages/ConfirmationPage/ConfirmationPage'
import { OurHistoryPage } from './pages/OurHistory/OurHistoryPage'

const App = (): JSX.Element => {

  return (
    <Fragment>
      <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<OurHistoryPage></OurHistoryPage>}/>
            <Route path="/home" element={<HomePage></HomePage>}/>
            <Route path="/asistencia" element={<ConfirmationPage></ConfirmationPage>}/>
            <Route path="/nuestra-historia" element={<OurHistoryPage></OurHistoryPage>}/>
          </Routes>
        </BrowserRouter>
    </Fragment>

  )
}

export default App
