import React from 'react'

const Navbar = () => {
    let titulos = ['Home', 'About us', 'Menú', 'Contacto']
  return (
    <>
        <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            {titulos.map((titulo, index) => <p key={index}>{titulo}</p>)}
        </ul>
    </>
  )
}

export default Navbar