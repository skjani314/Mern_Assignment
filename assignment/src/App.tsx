import { useState } from 'react'
import './App.css'
import Page from './app/dashboard/Page'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <BrowserRouter>

      <Layout>

<Routes>
       <Route path="/" element={<Page />} />
       <Route path="/home" element={<Page />} />
       <Route path="/projects" element={<Page />} />
       <Route path="/profile" element={<Page />} />
       <Route path="/settings" element={<Page />} />
</Routes>
  </Layout>
</BrowserRouter>

  )
}

export default App
