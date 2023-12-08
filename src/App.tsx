import './theme/globalFonts.css'
import { createContext, Fragment, useContext, useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { ListOfGuests, FilterValue, type TodoCompleted, type TodoId, GuestID, UpdateGuest } from './types'
import { FILTERS_BUTTONS, TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { receiveData, submitData } from './connection/connectionMethods'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { LevelContext, ProcessWizard } from './theme/components/ProcessWizard'
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
