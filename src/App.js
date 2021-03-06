import React, {Fragment} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ListaProductos from './components/ListaProductos'

function App() {
  const fecha = new Date().getFullYear();
  return (
  <Fragment>
    <Header
    titulo = 'Tienda Virtual' />
    <ListaProductos></ListaProductos>
    <Footer fecha = {fecha}></Footer>
  </Fragment>
  );
}

export default App;
