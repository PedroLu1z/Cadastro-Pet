import styled from 'styled-components'

export const ButtonSubmit = styled.button `
    background-color: #fff;
    border: 2px solid #ddd;
    font-family: 'Roboto Condensed', sans-serif;
    color: #000;
    padding: 5px;
    width: 100%;
    height: 53px;
    display: flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-weight: bold;
    font-size: 20px;
    border-radius: 4px;
    &:hover{
        cursor: pointer;
        transition: all ease-in-out 150ms;
        background-color: blueviolet;
        color: #fff;
    }
`


export const FormPet = styled.form`
    width: 50%;
    height: 100%;
    background-color: #fff;
    padding: 40px;

    @media (max-width:912px) {
        
            width: 100%;
            height: 100%;
    
    }

    h3{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
        position: relative;
        ::before {
            content: '';
            position: absolute;
            width: 32%;
            height: 2px;
            background-color: blueviolet;
            bottom: 0;
        }
    }
    div {
        margin: 2rem 0px;
        .input-pet {
            letter-spacing: 1.8px;
            font-size: 14.5px;
            font-family: 'Roboto Condensed', sans-serif;
            border: unset;
            outline: none;
            width: 100%;
            margin-bottom: 1rem;
            position: relative;
            border-bottom: 2px solid #ddd;
            outline: 0;
            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: blueviolet;
                bottom: 0;
            }
    
            &:focus, &:valid {
                border-bottom: 2px solid blueviolet;
            }

            &:focus ~ label, &:valid ~ label {
                font-size: 12px;
                transform: translateY(-24px) ;
                transition: all 100ms ease-in-out;
            }
    
            &::placeholder {
                
                opacity: 0;
            }
    
        }
    
        label {
            position: absolute;
            font-family: 'Roboto Condensed', sans-serif;
            left: 0;
            margin: 0px 40px;
            opacity: 50%;
            transition: all 100ms ease-in-out;
        }
    
       
    
        textarea {
            padding: 5px;
            resize:none;
        }
    }
`


