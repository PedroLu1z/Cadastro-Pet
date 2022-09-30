import React from 'react'

import CadastroPet from '../../components/CadastroPet/PetCadastro'
import PetInfo from '../../components/PetInfo/PetInfo'
import PetState from '../../components/PetState/PetState'

export default function home() {
  return (
    <div>
        <PetState/>
        {/* <CadastroPet></CadastroPet>
        <PetInfo></PetInfo> */}
    </div>
  )
}
