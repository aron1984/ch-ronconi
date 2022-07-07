import { Table } from 'react-bootstrap';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const CartTable = ({ recursosCart }) => {
  
    const{cartRender, getQuantyCount, getQuantyPrice, count, priceFormat, shippingHandle, totalPay} = recursosCart;

    return (

        <>
            <header className='tableHeader'>
                <h1>Tu carro de compras</h1>
            </header>

            <Table bordered hover size="sm" variant="dark" responsive>
                <thead>
                    <tr className='rowSpace'>
                        <th className="text-center">ID</th>
                        <th className="text-center" colSpan={2}>Producto</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-center">$ Unitario</th>
                        <th className="text-center">$ Total</th>
                        <th className="text-center"><RiDeleteBin5Line size={30} /></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cartRender
                    }

                </tbody>

                <tfoot>
                    <tr>
                        <th colSpan={3}>SUBTOTAL</th>
                        <th className="text-center">{getQuantyCount()}</th>

                        <th className="text-center">{count} {count === 0 ? "" : count > 1 ? "Productos" : "Poducto"}</th>
                        <th className="text-center" colSpan={2}>{priceFormat.format(getQuantyPrice())}</th>
                    </tr>

                    <tr>

                        <th colSpan={5}>ENVÍO {shippingHandle === 0 ? <span className='free'>GRATIS</span> : ""}</th>
                        <th className="text-center" colSpan={2} >{priceFormat.format(shippingHandle)}</th>
                    </tr>
                </tfoot>

            </Table>


            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th colSpan={4}>TOTAL A PAGAR</th>
                        <th className="text-center" colSpan={2}>{priceFormat.format(totalPay)}</th>
                    </tr>

                </thead>
            </Table>

        </>
    )
}
