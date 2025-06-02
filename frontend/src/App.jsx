import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import CreateNote from "./pages/CreateNote"
import Notes from "./pages/Notes"


function Logout () {
  localStorage.clear()
  return <Navigate to='/login' />
}


function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/course-notes/:course'
          element={
            <ProtectedRoute>
              <CreateNote />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/course-notes/notes/:course'
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          } 
        />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<RegisterAndLogout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
