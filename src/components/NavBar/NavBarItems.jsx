import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { category } from "../services/category";
const imgCat = require.context('../../assets/img', true);

export const NavBarItems = () => {
    return (
        <>
            {
                category.map(({ cat, src }) =>
                (
                    <Nav key={cat} className='prueba'>
                        <Link className='linkNav' to={`/category/${cat}`}>
                            {/* {cat.toUpperCase()} */}
                            <div className='m-1 catIcon'>

                                <img src={imgCat(`./${cat}.png`)} alt={cat} />
                            </div>

                        </Link>
                    </Nav>
                )
                )
            }
        </>
    )
}
