import { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import Navegation from './components/Navegation';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<Navegation/>}></Route>
          <Route path='/api' element={<CreateUser/>}></Route>
          <Route path="/singIn" element={<ListUser/>} />
          <Route path="/CreateUser" element={<CreateUser/>} />
        </Routes>

    </>
  )
}

export default App
