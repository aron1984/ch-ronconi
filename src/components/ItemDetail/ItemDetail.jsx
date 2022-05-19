import React from 'react'
import { Container, Card } from 'react-bootstrap'
import './ItemDetail.css'

export default function ItemDetail({ item }) {


  // const cargarImagen = require.context("../../assets/img/", true);


  return (
    <>
      <article>
        <Container className='detailContainer'>
          <Card className="bg-dark text-white">
            <div className='imageContainer'></div>
            {/* <Card.Img src="" alt="Card image" className='imageContainer'/> */}
            <Card.ImgOverlay>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Falta colocar la imagen</Card.Text>
              <Card.Text>
                {item.des}
              </Card.Text>
              <Card.Text>Precio $ {item.precio} - Stock: {item.stock}</Card.Text>
            </Card.ImgOverlay>
          </Card>
         

         
       
        </Container>

      </article>



    </>
  )
}
