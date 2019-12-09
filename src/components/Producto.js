import React, { Fragment } from 'react';

const Producto = ({producto}) => (
    <Fragment>
        <h2>{producto.nombre}</h2>
        <h3>${producto.precio}</h3>
    </Fragment>
);

export default Producto;