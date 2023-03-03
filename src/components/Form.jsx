import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        age: ''
    })
    const [show, setShow] = useState(false)

    const reset = () => {
        setUser({
            name: '',
            age: '',
        })
        setShow(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.name.length > 3) setShow(true)
        else console.log('Hubo un error')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={user.name} onChange={(event) => setUser({name: event.target.value, ...user})}/>
            <label>Age</label>
            <input type="text" value={user.age} onChange={(event) => setUser({age: event.target.value, ...user})}/>
            <button>Enviar</button>
        </form>
        <button onClick={reset} style={{backgroundColor: 'red'}}>Reset</button>
        { 
            show
            ?
            <>
                <h3>Name: {user.name}</h3>
                <h3>Age: {user.age}</h3>
            </>
            : 
            null
        }
        {
            show && 
            <>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
            </>
        }
    </div>
  )
}

export default Form