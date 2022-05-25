
# e-comerce proyect

Proyecto de comercio e-comerce con REACT para Coder House Bootcamp.

## Appendix

El proyecto está cuenta con
* navbar
* catálogo de productos
* producto en detalle
* carro de compras

Para los estilos generales utilicé React-Bootstrap, pero para darle sentido
a la App, respecto al producto, edité estilos para tal fin.

La navegación integrada con React-Router-Dom, permite navegar entre catalogo,
filtro por categoría y producto individual.

De momento los productos listados estan en un archivo local .json que simulan estar en un servidor.
Cuenta con una estructura de datos dónde destaca "id" y "cat" para poder filtrar como es requerido.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Demo

Entrega 10 - Cart.jsx
* Agrega item al carro, no acepta duplicados, columna cuenta la cantidad, precio unitario y total de producto.
* Con cantidad y precio unitario sale el total para ese producto.
* Al pie de la tabla las cantidades de unidades, de productos, el precio total.
* Añado un item de ENVIO que si hay 4 o más productos en el carro se activa el ENVIO GRATIS; pero si hay menos
suma un precio por el envío.
* Cada item puede removerse del carro con el botón ELIMINAR.
* El CartWidget, está configurado par que NO DESAPAREZCA, pero que no muestre valor si no hay producto. Si hay producto, mostrará la cantidad y el precio acumulado (suma de la ecuación entr cantidad y precio de cada producto)
* Si el carro queara en sin productos, se mostrará un mensaje que no hay productos + un botón que dirige al home

*ME PARECIÓ INTERESANTE NO OCULTAR EL ICONO DEL CARRITO, sino ocultar el valor 0 (cero). Para no perder referencia de dónde se mostrarán los productos añadidos.

*Arreglos en LINK de botones de los Items.


<img src="Entrega10.gif" width="100%">





## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@aaron1984](https://www.github.com/aaron1984)


## Acknowledgements

 - [React-Bootstrap](https://react-bootstrap.github.io/)
 - [React](https://es.reactjs.org/blog/2022/03/29/react-v18.html)
 - [Readme](https://readme.so/es/editor)

