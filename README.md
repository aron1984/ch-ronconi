
# e-comerce proyect

Proyecto de comercio e-comerce con REACT para Coder House Bootcamp.

Steps:

1- git clone

2- npm install 

Ocional si hay alguna dependencia de validadción, iría acá

3- npm start

Características del proyecto

Decisiones sobre estructura

Vide de funcionamiento, mostrando FIREBASE como agrega

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

Entrega 12 - CheckOut
* Agrega orden a FIREBASE
* Mensaje de envío con exíto al comprar.
* Check al carrito, finalizar compra muestra resumen de compra y datos de facturación.
* IMPORTANTE: de momento el checkout está en el componente cart, PERO DEBERÍA ESTAR APARTE, para que lleve a otra ruta.
* En el GIF se ve cómo agrega orden a FIREBASE, datos del usuario, datos de la compra, monto total, y gasto de envío (si la compra es menor a 20000 se le agrega 1559, sino, 0 costo).


<img src="entrega12.gif" width="100%">





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

