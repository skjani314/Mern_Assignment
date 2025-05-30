import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import { ThemeProvider } from './components/Theme/theme-provider'

function App() {

  return (
    <ThemeProvider>
    <BrowserRouter>

      <Layout>

<Routes>
       <Route path="/" element={<Dashboard/>} />
       <Route path="/home" element={<HomePage />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/settings" element={<Settings />} />
</Routes>
  </Layout>
</BrowserRouter>
</ThemeProvider>
  )
}

export default App
