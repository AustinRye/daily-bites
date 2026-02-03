import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { pages } from './pages'
import './App.css'

function App() {
  return (
    <>
      <Navbar pages={pages} />

      <div className="mt-14 mx-auto max-w-7xl px-6">
        <Routes>
          {pages.map(({ href, Component }) => (
            <Route path={href} element={<Component />} />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App
