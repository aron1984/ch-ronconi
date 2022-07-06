import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { category } from "../services/category";
const imgCat = require.context('../../assets/img', true);

export const NavBarItems = () => {
    return (
        <>
            <Nav className='prueba'>
                <div className='m-4 catIcon'>
                    <Link className='linkNav' to={`/`}>
                        <img src={imgCat('./collection.png')} alt='Collection' title='Collection' />
                    </Link>
                </div>
            </Nav>
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
