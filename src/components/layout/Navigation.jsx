import routes from "../../utils/constants"
import { Link } from 'react-router-dom'


const Navigation = () => {

    return <nav>
        <ul style={{listStyle: 'none'}}>
             {Object.values(routes)
             .filter((route)=> route.includeInNavigation)
             .map((route)=> 
                <li  key={route.name}>
                    <Link to={route.path}>{route.name}</Link></li> )}

        </ul>
    </nav>
}

export default Navigation
