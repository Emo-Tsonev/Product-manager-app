import { Routes,Route } from 'react-router'
import routes from '../../utils/constants'

const Layout = () => {


    return <Routes>
        {Object.values(routes).map((route)=> <Route key={route.path} element={route.element} path={route.path}></Route>)}
    </Routes>
}

export default Layout
