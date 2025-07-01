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
const Dashboard = React.lazy(() => import("./components/dashboard/dashboard"))
const Withdraw = React.lazy(() => import("./components/withdraw/withdraw"))
const AddPaymentMethod = React.lazy(() => import("./pages/util/paymentMethod/addpaymentmethod/addpaymentmethod"))
const P2PTrading = React.lazy(() => import("./pages/p2p-Trading/p2p-page/p2p-page"))



function App() {
  // const authentication = localStorage.getItem("easypay")
  const { authenticationDataProps } = useContext(AuthContext)

  return (
    <ContextProvider>
      <Routes>
            {authenticationDataProps && <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />}
            {authenticationDataProps && <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />}
            {authenticationDataProps && <Route path="/register" element={<Suspense fallback={<Loading />}><Register /></Suspense>} />}
            {/* {!authenticationDataProps && <Route path="/user/reset_password/email" element={<Suspense fallback={<Loading />}><ResetPassword /></Suspense>} />} */}
      </Routes>
      {!authenticationDataProps && <Layout>
        <Routes>
            {!authenticationDataProps && <Route path="/user/my/dashboard" element={<Suspense fallback={<Loading />}><Dashboard /></Suspense>} />}
            {!authenticationDataProps && <Route path="/withdraw/user" element={<Suspense fallback={<Loading />}><Withdraw /></Suspense>} />}
            {!authenticationDataProps && <Route path="/user/add-payment/method" element={<Suspense fallback={<Loading />}>
              <AddPaymentMethod urlPath='http://localhost:8080/addpayment/method'/></Suspense>} />}
            {!authenticationDataProps && <Route path="/user/p2p/trading" element={<Suspense fallback={<Loading />}><P2PTrading /></Suspense>} />}
            {/* {!authenticationDataProps && <Route path="/withdraw/user" element={<Suspense fallback={<Loading />}><Withdraw /></Suspense>} />}  */}
        
        </Routes>
      </Layout>}
    </ContextProvider>
  )
}

export default App
