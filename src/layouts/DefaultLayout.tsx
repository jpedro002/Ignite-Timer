import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

export default function DefaultLayout() {
  return (
    <div className='max-w-6xl h-[calc(100vh-10vh)] my-20 mx-auto p-10 bg-[#2d2d32] rounded-sm   '>
      <Header />
      <Outlet />
    </div>
    
  )
}
