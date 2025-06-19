import React, { useContext, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from "./pages/layout/layout"
import ContextProvider from './hooks/contextProvider'
import AuthContext from './hooks/context'


const Login = React.lazy(() => import("./components/login/login"))

// interface AuthenticationProps {
//   authentication: 
// }

function App() {
  // const authentication = localStorage.getItem("easypay")
  const { authenticationDataProps } = useContext(AuthContext)

  return (
    <ContextProvider>
      <Routes>
            {!authenticationDataProps && <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />}
      </Routes>
      {authenticationDataProps && <Layout>
        <Routes>
            {/* {authenticationDataProps && <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />} */}
            {/* <Route path="/user/register" element={<Suspense><Register /></Suspense>} /> */}
        </Routes>
      </Layout>}
    </ContextProvider>
  )
}

export default App
