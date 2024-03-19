import Home from '../components/home/home'
import Actions from '../components/actions/actions'
import { Route, Routes } from 'react-router-dom'

export default function MainRoutes() {
    const PAGES = [
        {path: "/", component:<Home/>},
        {path: "/action", component:<Actions/>}
    ]
  return (
    <Routes>
      {PAGES.map((el, id)=>(
        <Route key={id} path={el.path} element={el.component} />
      ))}
    </Routes>
  )
}
