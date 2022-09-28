import React from "react";
import { Link } from "react-router-dom";
import "./details.css";
import PetBg from "../CadastroPet/img/pet-bg2.jpg";

const PetInfo = () => {
  function Mostrar() {
    console.log("RECEBA");
  }

  return (
    <div class="card-container">
      <div class="img-pet">
        <img src={PetBg} alt="foto do pet" />
      </div>
      <div class="nome-pet">
        <h3>Nome Pet</h3>
      </div>
      <div class="pet-info">
        <p>Raça:</p>
        <p>Data-nascimento:</p>
        <p>Tamanho:</p>
        <p>NomeDono:</p>
        <p>TelefoneDono:</p>
        <textarea
          name="obs"
          id="obsPet"
          cols="30"
          rows="10"
          placeholder="Observações: "
        ></textarea>
      </div>
      <div class="edit-btn">
        <button onClick={Mostrar}>Alterar Informações</button>
      </div>
    </div>
  );
};

export default PetInfo;
