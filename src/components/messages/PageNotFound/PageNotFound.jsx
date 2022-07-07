import { Link } from 'react-router-dom';

import './PageNotFound.css'

export default function PageNotFound () {
  return (
    <div className='pageNotFound'>

      <h3>ERROR 404</h3>
      <h3>PÁGINA NO ENCONTRADA</h3>
      <p>
        <Link to={`/`}>
          Ve a la página de inicio
        </Link>
      </p>
    </div>
  )
}
