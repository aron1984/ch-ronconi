import React from 'react'
import { Container, Card, ListGroup } from 'react-bootstrap'
import './ItemDetail.css';
import ItemCount from '..//ItemCount/ItemCount';

export default function ItemDetail({ item }) {


  console.log(item)


  return (
    <>
      <Container className='detailContainer'>
        <div className='mainImage'>
          <img className='imgM' alt="" src={item.url} />
        </div>
        <div className='sidebarRight'>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.categroy}</Card.Subtitle>

              <ListGroup>
                <ListGroup.Item mx-auto>{item.des}</ListGroup.Item>
                <ListGroup.Item>Temporada: {item.year}</ListGroup.Item>
                <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
                <ListGroup.Item>Precio: ${item.precio}</ListGroup.Item>
                <ListGroup.Item><Card.Link href="#">Card Link</Card.Link></ListGroup.Item>
              </ListGroup>

              {/* espacio para la botonera */}

              <ItemCount stock={item.stock} initial="1" product={item.name}/>

            </Card.Body>
          </Card>
        </div>
      </Container>


    </>
  )
}
