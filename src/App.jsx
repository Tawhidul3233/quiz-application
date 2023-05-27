import Layout from './Components/Layout'
import Login from './Components/Pages/Login'
import Quiz from './Components/Pages/Quiz'
import Result from './Components/Pages/Result'
import Home from './Components/Pages/Home'
import SingUp from './Components/Pages/SingUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Styles/App.css'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'

function App() {

  // console.log(process.env.REACT_APP_apiKey)
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home> </Home>}></Route>
          <Route path='/Singup' element={
            <PublicRoute>
              <SingUp> </SingUp>
            </PublicRoute>}> </Route>
          <Route path='/Login' element={
            <PublicRoute>
              <Login> </Login>
            </PublicRoute>}>  </Route>
          <Route path='/Quiz/:videoID' element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>}>
          </Route>
          <Route path='/Result/:videoID' element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>}>
          </Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
