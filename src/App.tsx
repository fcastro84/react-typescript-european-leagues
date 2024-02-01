
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import AppRouter from './routers/AppRouter'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.history.replaceState(null, '', '/')
  }, [])
  

  return (
    <div className='flex mx-auto justify-center bg-slate-50 h-full'>
      <AppRouter />
      <ReactQueryDevtools  />
    </div>
  )
}

export default App
