import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>

      <Layout>

<Routes>
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/home" element={<HomePage />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/settings" element={<Settings />} />
</Routes>
  </Layout>
</BrowserRouter>

  )
}

export default App
