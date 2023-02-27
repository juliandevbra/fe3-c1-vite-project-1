import React from 'react'
import Navbar from './Navbar'
import imgpizza from '../assets/pizza_de_mozzarella.jpg'
import Card from './Card'
import { HomeStyle } from './HomeStyles'

const Home = () => {
    let pizzas = [
        { id: 1, tipo: 'Muzzarella', precio: '$1200', img: imgpizza },
        { id: 2, tipo: 'Fugazza', precio: '$1250', img: 'https://www.recetas-argentinas.com/base/stock/Recipe/14-image/14-image_web.jpg.webp' },
        { id: 3, tipo: 'Napolitana', precio: '$1350', img: 'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/640x640sq70/photo.webp' },
        { id: 4, tipo: 'Rucula y crudo', precio: '$1500', img: 'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg' },
        { id: 5, tipo: 'Especial', precio: '$1400', img: 'https://saboresmendoza.com/wp-content/uploads/2019/09/pizza.jpg' },
    ]
  return (
    < >
        <Navbar/>
        <h1>Bienvenidos a la pizzeria de DH</h1>
        <div style={HomeStyle}>
            {pizzas.map(pizza => <Card key={pizza.id} pizza={pizza}/>)}
        </div>
    </>
  )
}

export default Home


