import React from "react";
import { Link } from "react-router-dom";
import "./details.css";
import PetBg from "../CadastroPet/img/pet-bg2.jpg";

const PetInfo = (props) => {

  return (
    <>
      <div className="container-pet">
        <div class="card-container">
          <div class="img-pet">
            <img src={PetBg} alt="foto do pet" />
          </div>
          <div class="nome-pet">
            <h3>{props.nomePet}</h3>
          </div>
          <div class="pet-info">
            <p>Raça: {props.racaPet}</p>
            <p>Idade do Pet: {props.idadePet}</p>
            <p>Tamanho: {props.tamanhoPet}cm</p>
            <p>NomeDono: {props.nomeDono}</p>
            <p>TelefoneDono: {props.telefoneDono}</p>
            <textarea
              name="obs"
              id="obsPet"
              cols="30"
              rows="10"
              placeholder="Observações: "
            ></textarea>
          </div>
          <div class="edit-btn">
            <button>Alterar Informações</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetInfo;
