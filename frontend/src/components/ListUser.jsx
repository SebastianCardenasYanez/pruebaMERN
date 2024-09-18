import React from 'react'
import { useState } from 'react'

const ListUser = () => {
  const valorInicial = {
    correo: "",
    contraseña: ""
}

const [usuario, setCount] = useState(valorInicial)

const capData = (e) => {
    const {name, value} = e.target
    setCount({...usuario, [name]: value})
}

const saveData = async(e) => {
    e.preventDefault();
    //get
    const newUser = {
        correo: usuario.correo,
        contraseña: usuario.contraseña
    }

    let query = await fetch("http://localhost:5000/api/usuario", {
        method: "get"
    })
    let datos = await query.json()
    console.log(datos)
      
    setCount({...valorInicial});
  } 


  return (
         <article className='createAccount'>
            <h1>Log in</h1>
            <form className='formCreateAccount' onSubmit={saveData}>
                <div className="fields">
                    <label>
                        Correo: 
                    </label>
                    <input type="text" className="fromControl" placeholder="ingresar el email" required name="correo" onChange={capData}/>
                </div>

                <div className="fields">
                    <label>
                        Contraseña: 
                    </label>
                    <input type="text" className="fromControl" placeholder="ingresar la contraseña" required name="contraseña" onChange={capData}/>
                </div>

                <button className="buttonForm">Log in</button>
            </form>
        </article>
  )
}

export default ListUser