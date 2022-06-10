
<div style="text-align: center; background-color: grey; padding: 5px; border-radius: 5px">
<h1>PROYECTO ECOMMERCE</h1>

<h3>Proyecto de comercio e-comerce con REACT para Coder House Bootcamp.</h3>

<a href="https://coderhouse-ecommerce-3cad8.web.app/">https://coderhouse-ecommerce-3cad8.web.app/</a>

</div>

# 🚀 Acerca del proyecto

Es el proyecto final del bootcamp de React dictado por CODERHOUSE.
La idea final de presentar una tienda de indumentaria deportiva referente a la Selección Argentina, de sus distintos deportes.
A la fecha, y a los fines de presentación, sólo es una muestra; pero con la idea de completar la galería a fururo.

# 🚀 Dependendencias

## [React-Bootstrap](https://react-bootstrap.github.io/)

Elegí este framework como variante a bootstrap (que ya conocía) porque quería conocerlo mediante el desarrollo del proyecto; para analizar luego que margen de personalización me brinda, etc.

## [React-icons](https://react-icons.github.io/)

Para mantener un estilo en la composición del diseño me ajusté a algunos pocos icónos.

## [React-router-Dom](https://www.npmjs.com/package/react-router-dom)

Para el enrutamiento a las distintas secciones del proyecto.

## [Formik](https://formik.org/)

Utilicé esta dependencia para validar los campos y el formulario que aparece como Datos de facturación en el "checkout" para generar la orden. **Obviamene tuve que estudiar un poco, practicar hasta dejarlo medianamente presentable**, acá puedo seguir investigando un poco  para validar mejor. 

## [Firebase](https://firebase.google.com)

Para poder alojar nuestra base de datos de productos y ordenes.




# 🚀 Instalación

### 💬 #1 - Clonar el proyecto

```bash
git clone https://github.com/aron1984/ch-ronconi.git
```
### 💬 #2 - Instalar las dependencias

```bash
npm install
```

### 💬 #3 - Firebase

```bash
# Firebase está configurado para el perído de evaluación del proyecto. 
```

### 💬 #4 - Iniciar el proyecto en el sevidor local

```bash
npm start
```


## 🚀 Características del proyecto

+ El proyecto muestra una lista de productos, todos por defecto.
+ Puede filtrarse por categorías ***de momento estáticas***. Esta es una opción para implentar a futuro.
+ Cliqueando en un item, nos dirige al detalle. 
+ En el detalle, podemos seleccionar la cantidad de productos.
+ Una vez agregado al carro, tenemos 3 opciones: ***"Eliminar del carrito"***, ***"vaciar carrito"***, ***"finalizar compra"***.  
+ ***"Finalizar compra"*** nos lleva al carrito de compras, dónde podemos eliminar un proudcto que querramos; o proceder a finalizar la compra que nos llevará a ***"checkout"***.
+***"Checkout"*** nos solicitará llenar un formulario para hacer el pedido.
+ Finalmente, si se ingresarn los datos correctamente, se generará una orden con una identificación que se muestra en pantalla para el usuario.
+ Configuré de tal manera que navegar con "<-" y "->" entre el carrito y el checkout sólo se haga desde el carrito haciendo FINALIZAR COMPRA. De lo contrario, se mostraría en blanco o un mensaje.
+ En el carrito y el checkout, implementé columnas para cantidad de unidades de producto, y cantidad por producto.

Investigando un poco, pude hacer uso de ***custom hook*** para que los datos persistan en el **localstorage**.

### Otras consideraciones

+ Agregué una costo de envío, configurado en $0 "Gratis" para compras mayores a $20.000
+ De momento el stock es el configurado inicialmente en desde FIREBASE. 
+ El ***cardwidget*** se muestra siempre en la esquina superior derecha: si se agrega 1 producto o más, empezará a mostrar la cantidad de productos, y la suma en $.
+ La navegación integrada con eact-Router-Dom, permite navegar entre catalogo, filtro por categoría y producto individual.

En cuanto a los estilos, me vi en la necesidad de editar personalizar el proyecto, y despegarme de lo que propone React-Bootstrap. Así pude agregarle un pequeño efecto ***:hover*** a los items para dirigir la mirada con ese sencillo efecto visual.


#### RESPONSIVE

El proyecto esta configurado para verlo ***opcionalmente*** cómo iPhone Se 375px x 667px

## Appendix

El proyecto está cuenta con

* [x] Navbar.
* [x] Catálogo de productos.
* [x] Producto en detalle.
* [x] Carro de compras
* [x] Checkout
* [x] Filtro por categorías
* [x] Cartwidget
* [x] Persistencia
* [x] Manejador de ajuste de cantidad en el carro de compras.

## Roadmap

* [ ] Categorías dinámicas desde firebase.
* [ ] Stock dinámico.
* [ ] Agregar mensajes emergentes con otra dependencia que no sea React-Boostrap

# 🚀 Demo

<img src="entrega12.gif" width="100%">

## Authors

- [@aaron1984](https://www.github.com/aaron1984)

## Acknowledgements

 - [React-Bootstrap](https://react-bootstrap.github.io/)
 - [React](https://es.reactjs.org/blog/2022/03/29/react-v18.html)
 - [Readme](https://readme.so/es/editor)

