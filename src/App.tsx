import React, { useContext, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Loading from './pages/loading/loading'
import Layout from "./pages/layout/layout"
import ContextProvider from './hooks/contextProvider'
import AuthContext from './hooks/context'

import './App.css'


const Home = React.lazy(() => import("./components/home/home"))
const Register = React.lazy(() => import("./components/authentication/register/register"))
const Login = React.lazy(() => import("./components/authentication/login/login"))

// interface AuthenticationProps {
//   authentication: 
// }

function App() {
  // const authentication = localStorage.getItem("easypay")
  const { authenticationDataProps } = useContext(AuthContext)

  return (
    <ContextProvider>
      <Routes>
            {!authenticationDataProps && <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />}
            {!authenticationDataProps && <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />}
            {!authenticationDataProps && <Route path="/register" element={<Suspense fallback={<Loading />}><Register /></Suspense>} />}
            {/* {!authenticationDataProps && <Route path="/user/reset_password/email" element={<Suspense fallback={<Loading />}><ResetPassword /></Suspense>} />} */}
      </Routes>
      {authenticationDataProps && <Layout>
        <Routes>
            {/* {authenticationDataProps && <Route path="/" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />} */}
            {/* <Route path="/user/register" element={<Suspense fallback={<Loading />}><Register /></Suspense>} /> */}
        </Routes>
      </Layout>}
    </ContextProvider>
  )
}

export default App
