import { Spinner } from 'react-bootstrap';

import './LoadingSpinner.css'

export default function LoadingSpinner() {
  return (
    <>
        <Spinner animation="border" size="lg" className='loading' />
    </>
  )
}
