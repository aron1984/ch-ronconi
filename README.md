
<div style="text-align: center; background-image: linear-gradient(to right, #0066ff, #283747);
padding: 5px;
border-radius: 5px;
height: 15rem; z-index:1">
<h1 style="color: #f8f9f9">PROYECTO ECOMMERCE</h1>

<h3 style="color: #f8f9f9">Proyecto de comercio e-comerce con REACT para Coder House Bootcamp.</h3>

<a style="color: #d6dbdf" href="https://coderhouse-ecommerce-3cad8.web.app/"><strong>https://coderhouse-ecommerce-3cad8.web.app/</strong></a>

</div>

# 馃殌 Screenshot
<div style="display:flex; flex-direction:column; align-items: center; ">
<img src="ARG_Store_full.JPG" style="margin-bottom:1rem">
<img src="ARG_Store_mobile.JPG" style="width:20rem">
</div>

# 馃殌 Demo

<img src="ArgStore_React.gif" width="100%">

# 馃殌 Acerca del proyecto

Es el proyecto final del bootcamp de React dictado por CODERHOUSE.
La idea final de presentar una tienda de indumentaria deportiva referente a la Selecci贸n Argentina, de sus distintos deportes.
A la fecha, y a los fines de presentaci贸n, s贸lo es una muestra; pero con la idea de completar la galer铆a a fururo.

# 馃殌 Dependencias

## [React-Bootstrap](https://react-bootstrap.github.io/)

Eleg铆 este framework como variante a bootstrap (que ya conoc铆a) porque quer铆a conocerlo mediante el desarrollo del proyecto; para analizar luego que margen de personalizaci贸n me brinda, etc.

## [React-icons](https://react-icons.github.io/)

Para mantener un estilo en la composici贸n del dise帽o me ajust茅 a algunos pocos ic贸nos.

## [React-router-Dom](https://www.npmjs.com/package/react-router-dom)

Para el enrutamiento a las distintas secciones del proyecto.

## [Formik](https://formik.org/)

Utilic茅 esta dependencia para validar los campos y el formulario que aparece como Datos de facturaci贸n en el "checkout" para generar la orden. **Obviamene tuve que estudiar un poco, practicar hasta dejarlo medianamente presentable**, ac谩 puedo seguir investigando un poco  para validar mejor. 

## [Firebase](https://firebase.google.com)

Para poder alojar nuestra base de datos de productos y ordenes.


# 馃殌 Instalaci贸n

### 馃挰 #1 - Clonar el proyecto

```bash
git clone https://github.com/aron1984/ch-ronconi.git
```
### 馃挰 #2 - Instalar las dependencias

```bash
npm install
```

### 馃挰 #3 - Firebase

```bash
# Firebase est谩 configurado para el per铆do de evaluaci贸n del proyecto. Luego reorganizar茅 estos en un nuevo repositorio para no compoartir los datos de firebase.
```

### 馃挰 #4 - Iniciar el proyecto en el sevidor local

```bash
npm start
```


## 馃殌 Caracter铆sticas del proyecto

+ El proyecto muestra una lista de productos, todos por defecto.
+ Puede filtrarse por categor铆as ***de momento est谩ticas***. Esta es una opci贸n para implentar a futuro.
+ Cliqueando en un item, nos dirige al detalle. 
+ En el detalle, podemos seleccionar la cantidad de productos.
+ Una vez agregado al carro, tenemos 3 opciones: ***"Eliminar del carrito"***, ***"vaciar carrito"***, ***"finalizar compra"***.  
+ ***"Finalizar compra"*** nos lleva al carrito de compras, d贸nde podemos eliminar un proudcto que querramos; o proceder a finalizar la compra que nos llevar谩 a ***"checkout"***.
+***"Checkout"*** nos solicitar谩 llenar un formulario para hacer el pedido.
+ Finalmente, si se ingresarn los datos correctamente, se generar谩 una orden con una identificaci贸n que se muestra en pantalla para el usuario.
+ Configur茅 de tal manera que navegar con "<-" y "->" entre el carrito y el checkout s贸lo se haga desde el carrito haciendo FINALIZAR COMPRA. De lo contrario, se mostrar铆a en blanco o un mensaje.
+ En el carrito y el checkout, implement茅 columnas para cantidad de unidades de producto, y cantidad por producto.

Investigando un poco, pude hacer uso de ***custom hook*** para que los datos persistan en el **localstorage**.

### Otras consideraciones

+ Agregu茅 una costo de env铆o, configurado en $0 "Gratis" para compras mayores a $20.000
+ De momento el stock es el configurado inicialmente en desde FIREBASE. 
+ El ***cardwidget*** se muestra siempre en la esquina superior derecha: si se agrega 1 producto o m谩s, empezar谩 a mostrar la cantidad de productos, y la suma en $.
+ La navegaci贸n integrada con eact-Router-Dom, permite navegar entre catalogo, filtro por categor铆a y producto individual.

En cuanto a los estilos, me vi en la necesidad de editar personalizar el proyecto, y despegarme de lo que propone React-Bootstrap. As铆 pude agregarle un peque帽o efecto ***:hover*** a los items para dirigir la mirada con ese sencillo efecto visual.


#### RESPONSIVE

El proyecto esta configurado para verlo ***opcionalmente*** c贸mo iPhone Se 375px x 667px

## Appendix

El proyecto est谩 cuenta con

* [x] Navbar.
* [x] Cat谩logo de productos.
* [x] Producto en detalle.
* [x] Carro de compras
* [x] Checkout
* [x] Filtro por categor铆as
* [x] Cartwidget
* [x] Persistencia
* [x] Manejador de ajuste de cantidad en el carro de compras.

## Roadmap

* [ ] Categor铆as din谩micas desde firebase.
* [ ] Stock din谩mico.
* [ ] Agregar mensajes emergentes con otra dependencia que no sea React-Boostrap


## Authors

- [@aaron1984](https://www.github.com/aaron1984)

## Acknowledgements

 - [React-Bootstrap](https://react-bootstrap.github.io/)
 - [React](https://es.reactjs.org/blog/2022/03/29/react-v18.html)
 - [Readme](https://readme.so/es/editor)

