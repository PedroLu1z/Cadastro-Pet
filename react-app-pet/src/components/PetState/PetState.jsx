import React, { useState } from 'react'
import CadastroPet from '../CadastroPet/PetCadastro'
import PetInfo from '../PetInfo/PetInfo'


const initialValue = {
    'nomePet': '',
    'idadePet': '',
   'racaPet': '',
    'tamanhoPet': '',
    'nomeDono': '',
    'telefoneDono': '',
    'imagemPet': '',
    'observacoes': ''
}

export default function PetState() {

    const [pets, setPets] = useState([])

    const [nPets, setNPets] = useState(initialValue)

    //mostrar no console
    function showPet() {
        console.log(pets)
    }

    // cadastrar os pets
    function addPet(ev) {
        ev.preventDefault()
        setPets([...pets, nPets])
    }

    //capturar os dados
    function capData(ev) {
        ev.preventDefault()
        const { name, value } = ev.target;

        if (name === "nomePet") {
            setNPets({
                nomePet: value,
                idadePet: nPets.idadePet,
                racaPet: nPets.racaPet,
                tamanhoPet: nPets.tamanhoPet,
                nomeDono: nPets.nomeDono,
                telefoneDono: nPets.telefoneDono,
                imagemPet:nPets.imagemPet,
                observacoes: nPets.observacoes
            })

        }
        else if (name === "idadePet") {
            setNPets({
                nomePet: nPets.nomePet,
                idadePet: value,
                racaPet: nPets.racaPet,
                tamanhoPet: nPets.tamanhoPet,
                nomeDono: nPets.nomeDono,
                telefoneDono: nPets.telefoneDono,
                imagemPet: nPets.imagemPet,
                observacoes: nPets.observacoes
            })
        }
        else if (name === "racaPet") {
            setNPets({
                nomePet: nPets.nomePet,
                idadePet: nPets.idadePet,
                racaPet: value,
                tamanhoPet: nPets.tamanhoPet,
                nomeDono: nPets.nomeDono,
                telefoneDono: nPets.telefoneDono,
                imagemPet: nPets.imagemPet,
                observacoes: nPets.observacoes
            })
        }
        else if (name === "tamanhoPet") {
            setNPets({
                nomePet: nPets.nomePet,
                idadePet: nPets.idadePet,
                racaPet: nPets.racaPet,
                tamanhoPet: value,
                nomeDono: nPets.nomeDono,
                telefoneDono: nPets.telefoneDono,
                imagemPet: nPets.imagemPet,
                observacoes: nPets.observacoes
            })
        }
        else if (name === "nomeDono") {
            setNPets({
                nomePet: nPets.nomePet,
                idadePet: nPets.idadePet,
                racaPet: nPets.racaPet,
                tamanhoPet: nPets.tamanhoPet,
                nomeDono: value,
                telefoneDono: nPets.telefoneDono,
                imagemPet: nPets.imagemPet,
                observacoes: nPets.observacoes
            })
        }
        else if (name === "telefoneDono") {
            setNPets({
                nomePet: nPets.nomePet,
                idadePet: nPets.idadePet,
                racaPet: nPets.racaPet,
                tamanhoPet: nPets.tamanhoPet,
                nomeDono: nPets.nomeDono,
                telefoneDono: value,
                imagemPet: nPets.imagemPet,
                observacoes: nPets.observacoes
            })
        }
        else if (name === "imagemPet") {
            setNPets({
                nomePet: nPets.nomePet,
                idadePet: nPets.idadePet,
                racaPet: nPets.racaPet,
                tamanhoPet: nPets.tamanhoPet,
                nomeDono: nPets.nomeDono,
                telefoneDono: nPets.telefoneDono,
                imagemPet: value,
                observacoes: nPets.observacoes
            })
        }
        else if (name === "observacoes") {
            setNPets({
                nomePet: nPets.nomePet,
                idadePet: nPets.idadePet,
                racaPet: nPets.racaPet,
                tamanhoPet: nPets.tamanhoPet,
                nomeDono: nPets.nomeDono,
                telefoneDono: nPets.telefoneDono,
                imagemPet: nPets.imagemPet,
                observacoes: value
            })
        }
    }

    return (
        <>
            <CadastroPet
                capData = {capData}
                addData = {addPet}
                newData = {nPets}
                show = {showPet}
            />

            {pets.map((pt,i) =>
                <PetInfo
                    nomePet = {pt.nomePet}
                    idadePet = {pt.idadePet}
                    racaPet = {pt.racaPet}
                    tamanhoPet = {pt.tamanhoPet}
                    nomeDono = {pt.nomeDono}
                    telefoneDono = {pt.telefoneDono}
                    imagemPet = {pt.imagemPet}
                    observacoes = {pt.observacoes}
                />
            )}

            

        </>
    )
}
