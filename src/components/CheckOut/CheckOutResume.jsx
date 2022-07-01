import { Table } from 'react-bootstrap';

export const CheckOutResume = ({accessContext, priceFormat, checkDates}) => {


    return (
        <>
            <section className='factoryResume'>
              <header className='tableHeader'>
                <h1>Resumen de tu pedido</h1>
              </header>

              <Table striped bordered hover size="sm" className="bg-light border" responsive>
                <thead>
                  <tr className='rowSpace'>
                    <th className="text-center" colSpan={3}>Producto</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-center">Precio Unitario</th>
                    <th className="text-center">Total</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    accessContext.itemsCart.map((i, index) => {
                      return (
                        <tr className='rowSpace' key={index}>
                          <><td style={{ textAlign: "left" }} colSpan={3}>Camiseta {i.nam}</td>
                            <td className="text-center">{i.quantity}</td>
                            <td className="text-center">{priceFormat.format(i.price)}</td>
                            <td className="text-center">{priceFormat.format(i.price * i.quantity)}</td></>
                        </tr>
                      )
                    })
                  }

                  <tr className='space'>
                    <td colSpan={6}></td>

                  </tr>
                </tbody>

                <tfoot className='footSection'>
                  <tr >
                    <th colSpan={3}>SUBTOTAL</th>

                    <th className="text-center">{checkDates.getQuantyCount()}</th>

                    <th className="text-center">{checkDates.count} {checkDates.count === 0 ? "" : checkDates.count > 1 ? " productos" : " poducto"}</th>
                    <th className="text-center" colSpan={2}>{priceFormat.format(checkDates.getQuantyPrice())}</th>
                  </tr>

                  <tr >

                    <th colSpan={5}>ENVÍO {accessContext.shippingHandle === 0 ? <span className='free'>GRATIS</span> : ""}</th>
                    <th className="text-center" colSpan={2} >
                      {priceFormat.format(checkDates.shippingHandle)}

                    </th>
                  </tr>
                  <tr className='totalRow'>
                    <th colSpan={5} >MONTO TOTAL</th>
                    <th className="text-center" colSpan={2} >{priceFormat.format(checkDates.totalPay)}</th>
                  </tr>
                </tfoot>
              </Table>
            </section>
        </>
    )
}
