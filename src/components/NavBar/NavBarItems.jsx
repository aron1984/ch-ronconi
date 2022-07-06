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
                        <div className='m-4 catIcon'>
                        <Link className='linkNav' to={`/category/${cat}`}>
                            {/* {cat.toUpperCase()} */}
                            

                                <img src={imgCat(`./${cat}.png`)} alt={cat} title={cat.toUpperCase()} />
                            

                        </Link>
                        </div>
                    </Nav>
                )
                )
            }
        </>
    )
}
