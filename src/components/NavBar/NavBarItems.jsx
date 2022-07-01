import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { category } from "../services/category";

export const NavBarItems = () => {
    return (
        <>
            {
                category.map(cat =>
                (
                    <Nav key={cat} className='prueba'>
                        <Link className='linkNav' to={`/category/${cat}`}>{cat.toUpperCase()}</Link>
                    </Nav>
                )
                )
            }
        </>
    )
}
