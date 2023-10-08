import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
     <>
        <Header />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout;