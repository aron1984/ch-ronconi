import { Button } from 'react-bootstrap';

export const CartTableItems = ({recHandleItems, id, url, price, nam, quantity }) => {

    const {add, sub, removeItem, priceFormat } = recHandleItems;
    return (
        <>
            <tr key={id} id={id} className='rowSpace'>
                <td className="text-center">{id}</td>
                <td className="text-center bg-light"><img className='imgCartShip' alt="" src={url} /></td>
                <td className="text-center">{nam}</td>
                <td className="text-center">
                    <div className='handleQuanty'>
                        <div className='btnHandelQuanty'>
                            <Button variant='light' onClick={(e) => sub(id)}><strong>-</strong></Button>
                        </div>
                        <div className='quantyItem'>
                            {quantity}
                        </div>
                        <div className='btnHandelQuanty'>
                            <Button variant='light' onClick={() => add(id)}><strong>+</strong></Button>
                        </div>
                    </div>
                </td>
                <td className="text-center">{priceFormat.format(price)}</td>
                <td className="text-center">{priceFormat.format(price * quantity)}</td>
                <td className="text-center"><Button className='btnDelet' variant="danger" onClick={() => removeItem(id)}><strong>X</strong></Button></td>
            </tr>

        </>
    )
}
