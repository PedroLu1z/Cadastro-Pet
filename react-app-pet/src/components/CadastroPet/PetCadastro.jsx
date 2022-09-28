import React from 'react';
import PetBg from './img/pet-bg3.jpg'
import { ButtonSubmit, FormPet } from '../../style/styled'
import { Link } from 'react-router-dom';
import './cadastro.css'

function CadastroPet() {
  return (
    <div className='form-cadastro-pet'>
      <FormPet action="" method="post" className='form-pet'>
        <h3>Cadastre seu Pet</h3>

        {/*Nome pet*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite o nome do Pet' required/>
          <label>Nome Pet</label>
        </div>


        {/*Idade Pet*/}
        <div>
          <div></div>
          <input type="number" placeholder='Digite a Idade do Pet' required/>
          <label>Idade Pet</label>
        </div>


        {/*Raça*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite a Raça do Pet' required/>
          <label>Raça Pet</label>
        </div>


        {/*Tamanho*/}
        <div>
          <div></div>
          <input type="number" placeholder='Digite o Tamanho do Pet' required/>
          <label>Tamanho Pet</label>
        </div>


        {/*Nome do Dono*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite o Nome do(a) Dono(a)' required/>
          <label>Nome Dono</label>
        </div>


        {/*Telefone do Dono*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite o Nome do(a) Dono(a)' required/>
          <label>Telefone Dono</label>
        </div>


        {/*Imagem do Pet*/}
        <div>
          <div></div>
          <input type="file" required/>
          <label>Imagem Pet</label>
        </div>


        {/*Observações*/}
        <div>
          <div></div>
          <textarea type="text" placeholder='Digite as Observações' cols='70' rows='3' id='obs'/>
        </div>
        

        <div className='btn'>
          <ButtonSubmit>Cadastrar</ButtonSubmit>
        </div>
      </FormPet>

      <div className="text-pet">
        <img src={PetBg}  />
        <div>
          <h2>A atenção que seu pet merece!</h2>
          <h5>venha fazer parte da familia Pet-Care!</h5>            
        </div>
      </div>

      
    </div>
  );
}

export default CadastroPet;