import { useState } from 'react'

const FuncComponent = () => {
  const [estudiante, setEstudiante] = useState({
    name: 'Yohana',
    country: 'Colombia'
  })
  

  const changeName = () => {
    estudiante.name === 'Yohana' 
    ?
    setEstudiante({...estudiante, name: 'Carlos'})
    :
    setEstudiante({...estudiante, name: 'Yohana'})
  }

  return (
    <div>
      {console.log(estudiante)}
      <h2>{estudiante.name}</h2>
      <button onClick={changeName}>Cambiar nombre</button>
      {/* Operación ternaria
      
      1. La condición 
      ?
      2. se va a ejecutar si la condición es true
      :
      3. se va a ejecutar si la condicón es false 

      */}
    </div>
  )
}

export default FuncComponent
