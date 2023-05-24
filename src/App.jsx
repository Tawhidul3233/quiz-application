
import Layout from './Components/Layout'
import Login from './Components/Pages/Login'
import Quiz from './Components/Pages/Quiz'
import Result from './Components/Pages/Result'
import Home from './Components/Pages/Home'
import SingUp from './Components/Pages/SingUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Styles/App.css'

function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home> </Home>}></Route>
          <Route path='/Singup' element={<SingUp> </SingUp>}> </Route>
          <Route path='/Login' element={<Login> </Login>}>  </Route>
          <Route path='/Quiz' element={<Quiz > </Quiz>}>  </Route>
          <Route path='/Result' element={<Result> </Result>}></Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
