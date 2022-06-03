import React from 'react'
import { Spinner } from 'react-bootstrap'

import './LoadingSpinner.css'

export default function LoadingSpinner() {
  return (
    <div>
        <Spinner animation="border" size="lg" className='loading' />
    </div>
  )
}
