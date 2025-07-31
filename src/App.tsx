import React, { useContext, useEffect, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Loading from './pages/loading/loading'
import Layout from "./pages/layout/layout"
import AuthContext from './hooks/context'
import BottomNav from './pages/p2p-Trading/bottomNav/bottomNav'

import './App.css'


const Home = React.lazy(() => import("./components/home/home"))
const Register = React.lazy(() => import("./components/authentication/register/register"))
const Login = React.lazy(() => import("./components/authentication/login/login"))
const Dashboard = React.lazy(() => import("./components/dashboard/dashboard"))
const Withdraw = React.lazy(() => import("./components/withdraw/withdraw"))
const AddPaymentMethod = React.lazy(() => import("./pages/util/paymentMethod/addpaymentmethod/addpaymentmethod"))
const P2PTrading = React.lazy(() => import("./pages/p2p-Trading/p2p-page/p2p-page"))
const BuyCoin = React.lazy(() => import("./components/purchaseCoin/buyCoin"))
const SellCoin = React.lazy(() => import("./components/purchaseCoin/sellCoin"))
const MyAds = React.lazy(() => import("./pages/my-ads/ads"));



function App() {
  // const authentication = localStorage.getItem("easypay")
  // also get isAuth = true or false from res.cookies to manage page reload by user.
  const { userData } = useContext(AuthContext)

  const location = useLocation()
  let showBottomNav;
  if(location.pathname === "/user/p2p/trading" 
    || location.pathname === "/user/profile"
    || location.pathname === "/user/orders"
    || location.pathname === "/user/ads") {
      showBottomNav = <BottomNav />
  }

  console.log("FOR", userData)

  return (
    <>
      <Routes>
            {!userData && <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />}
            {!userData && <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />}
            {!userData && <Route path="/register" element={<Suspense fallback={<Loading />}><Register /></Suspense>} />}
            {/* {!userData && <Route path="/user/reset_password/email" element={<Suspense fallback={<Loading />}><ResetPassword /></Suspense>} />} */}
      </Routes>
    {userData && <Layout>
        <Routes>
          {userData && <Route path="/user/my/dashboard" element={<Suspense fallback={<Loading />}><Dashboard /></Suspense>} />}
          {userData && <Route path="/withdraw/user" element={<Suspense fallback={<Loading />}><Withdraw /></Suspense>} />}
          {userData && <Route path="/user/add-payment/method" element={<Suspense fallback={<Loading />}>
              <AddPaymentMethod processPayment={true}
                urlPath='http://localhost:8080/addpayment/method'/></Suspense>} />}
          {userData && <Route path="/user/p2p/trading" element={<Suspense fallback={<Loading />}><P2PTrading /></Suspense>} />}
          {userData && <Route path="/purchase/buy" element={<Suspense fallback={<Loading />}><BuyCoin /></Suspense>} />} 
          {userData && <Route path="/purchase/sell" element={<Suspense fallback={<Loading />}><SellCoin /></Suspense>} />} 
          {userData && <Route path="/user/ads" element={<Suspense fallback={<Loading />}><MyAds /></Suspense>} />} 
            {/* {userData && <Route path="/user/orders" element={<Suspense fallback={<Loading />}><Orders /></Suspense>} />}  */}
            {/* {userData && <Route path="/user/profile" element={<Suspense fallback={<Loading />}><Profile /></Suspense>} />}  */}
        
        </Routes>
      </Layout>}
    {userData ? showBottomNav : null}
    </>
  )
}

export default App
