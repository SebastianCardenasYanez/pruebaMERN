import React, { useState } from "react";

const CreateUser = () => {

    const valorInicial = {
        nombre: "",
        Username: "",
        edad: 18,
        correo: "",
        password: ""
    }

    const [usuario, setCount] = useState(valorInicial)

    const capData = (e) => {
        const {name, value} = e.target
        setCount({...usuario, [name]: value})
    }

    const saveData = async(e) => {
        e.preventDefault();

        //post
        const newUser = {
            nombre: usuario.nombre,
            Username: usuario.Username,
            edad: usuario.edad,
            correo: usuario.correo,
            password: usuario.password
        }

        await fetch("http://localhost:5000/api/usuario", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })

        setCount({...valorInicial});
    }

    return (
        <article className="createAccount">
            <h1>Create account</h1>
            <form className="formCreateAccount" onSubmit={saveData}>
                <div className="fields">
                    <label>
                        Nombre: 
                    </label>
                    <input type="text" className="fromControl" placeholder="ingresar el nombre" required name="nombre" onChange={capData}/>
                </div>

                <div className="fields">
                    <label>
                        Username: 
                    </label>
                    <input type="text" className="fromControl" placeholder="ingresar el username" required name="Username" onChange={capData}/>
                </div>

                <div className="fields">
                    <label>
                        Edad: 
                    </label>
                    <input type="number" className="fromControl" placeholder="ingresar la edad" required name="edad" onChange={capData}/>
                </div>

                <div className="fields">
                    <label>
                        Correo: 
                    </label>
                    <input type="text" className="fromControl" placeholder="ingresar el correo" required name="correo" onChange={capData}/>
                </div>

                <div className="fields">
                    <label>
                        Contraseña: 
                    </label>
                    <input type="text" className="fromControl" placeholder="ingresar la contraseña" required name="password" onChange={capData}/>
                </div>

                <button className="buttonForm">Guardar</button>
            </form>

        </article>
    )
}

export default CreateUser