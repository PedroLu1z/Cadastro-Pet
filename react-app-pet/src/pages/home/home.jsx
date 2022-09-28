import React from 'react'
import CadastroPet from '../../components/CadastroPet/PetCadastro'
import PetInfo from '../../components/PetInfo/PetInfo'

export default function home() {
  return (
    <div>
        <CadastroPet></CadastroPet>
        <PetInfo></PetInfo>
    </div>
  )
}
