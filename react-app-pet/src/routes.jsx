import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CadastroPet from './components/CadastroPet/PetCadastro';
import PetInfo from './components/PetInfo/PetInfo';
import Home from './pages/home/home';

function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path='/details' element={<PetInfo/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;