import styled from 'styled-components';
import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/router';

const Form = styled.form`
    
`
const InputName = styled.input`
    color: #fff;
    width: 100%;
    height: 40px;
    padding: 10px;
    display:block;
    font-size: 16px;
    font-weight: 400;
    border-radius: ${({theme}) =>  theme.borderRadius};
    background-color:  ${({theme}) =>  theme.colors.mainBg};
    border: 1px solid ${({theme}) =>  theme.colors.primary};
    margin-bottom: 20px;
    margin-top: 30px;
`

const ButtonName = styled.button`
    text-align: center;
    color: white;
    width: 100%;
    height: 40px;
    padding: 10px;
    display:block;
    font-size: 16px;
    font-weight: 400;
    border-radius: ${({theme}) =>  theme.borderRadius};
    background-color:  ${({theme}) =>  theme.colors.primary};
    border: 1px solid ${({theme}) =>  theme.colors.primary};
    :disabled{
        background-color: gray;
    }
`


export default function FormInput(){
    const router = useRouter();
    const [name, setName] = useState('');

    function handleSubmit (e){
        e.preventDefault();
        router.push(`/quiz?name=${name}`);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <InputName  onChange= {(event) => {setName(event.target.value);}} placeholder="Insira seu nick para jogar :)"/>
            <ButtonName type="submit" disabled={name.length === 0}>
                Jogar
            </ButtonName>
        </Form>     
    );
}