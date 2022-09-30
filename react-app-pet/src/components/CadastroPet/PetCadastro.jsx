import React from 'react';
import PetBg from './img/pet-bg3.jpg'
import { ButtonSubmit, FormPet } from '../../style/styled'
import './cadastro.css'


function CadastroPet(props) {

  return (
    <div className='form-cadastro-pet'>

      <FormPet
        className='form-pet'
        onSubmit={props.addData}
      >

        <h3>Cadastre seu Pet</h3>

        {/*Nome pet*/}
        <div>
          <input 
            type="text"
            placeholder='Digite o nome do Pet'
            className='input-pet'
            name='nomePet'
            value={props.newData.nomePet}
            onChange={props.capData}
            required
          />
          <label>Nome Pet</label>
        </div>


        {/*Idade Pet*/}
        <div>
          <input
            type="number"
            placeholder='Digite a Idade do Pet'
            className='input-pet'
            name='idadePet'
            value={props.newData.idadePet}
            onChange={props.capData}
            required
          />
          <label>Idade Pet</label>
        </div>


        {/*Raça*/}
        <div>
          <input
            type="text"
            placeholder='Digite a Raça do Pet'
            className='input-pet'
            name='racaPet'
            value={props.newData.racaPet}
            onChange={props.capData}
            required
          />
          <label>Raça Pet</label>
        </div>


        {/*Tamanho*/}
        <div>
          <input
          type="number"
          placeholder='Digite o Tamanho do Pet'
          className='input-pet'
          name='tamanhoPet'
          value={props.newData.tamanhoPet}
          onChange={props.capData}
          required
          />
          <label>Tamanho Pet</label>
        </div>


        {/*Nome do Dono*/}
        <div>
          <input
            type="text"
            placeholder='Digite o Nome do(a) Dono(a)'
            className='input-pet'
            name='nomeDono'
            value={props.newData.nomeDono}
            onChange={props.capData}
            required
          />
          <label>Nome Dono</label>
        </div>


        {/*Telefone do Dono*/}
        <div>
          <input
            type="text"
            placeholder='Digite o Nome do(a) Dono(a)'
            className='input-pet'
            name='telefoneDono'
            value={props.newData.telefoneDono}
            onChange={props.capData}
            required
          />
          <label>Telefone Dono</label>
        </div>


        {/*Imagem do Pet*/}
        <div>
          <input
            type="file"
            name='imagemPet'
            value={props.newData.imagemPet}
            onChange={props.capData}
            required
          />
        </div>


        {/*Observações*/}
        <div>
          <textarea
            type="text"
            placeholder='Digite as Observações'
            cols='70' rows='3'
            id='obs'
            value={props.newData.observacoes}
            onChange={props.capData}
            name='observacoes'
          />
        </div>


        <div className='btn'>
          <ButtonSubmit
            type="submit"
            onClick={props.show}
          >Cadastrar</ButtonSubmit>
        </div>


      </FormPet>

      <div className="text-pet">
        <img src={PetBg} />
        <div>
          <h2>A atenção que seu pet merece!</h2>
          <h5>venha fazer parte da familia Pet-Care!</h5>
        </div>
      </div>


    </div>
  );
}

export default CadastroPet;