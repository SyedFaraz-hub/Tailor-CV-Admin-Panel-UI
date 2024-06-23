import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnalyticsPage, HomePage, LoginPage } from './Pages'
import Feedback from './Pages/Home/Feedback/Feedback'
import FeedbackDetail from './Pages/Home/Feedback/FeedbackDetail'
import Individuals from './Pages/Home/Individuals/Individuals'
import Organizations from './Pages/Home/Organizations/Organizations'
import PushNotifications from './Pages/Home/PushNotifications/PushNotifications'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} >
        <Route path='/' element={<AnalyticsPage />}/>
        <Route path='individuals' element={<Individuals />}/>
        <Route path='organizations' element={<Organizations />}/>
        <Route path='feedback' element={<Feedback />}/>
        <Route path='feedback/details/:feedback_id' element={<FeedbackDetail />}/>
        <Route path='pushNotifications' element={<PushNotifications />}/>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
