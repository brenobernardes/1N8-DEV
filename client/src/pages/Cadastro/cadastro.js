import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from '../../components/button/button.js'
import './cadastro.css';

export default function Cadastro () {

    const [user, setUser] = useState({
        name: "",
        email: "",
        birthDate: "",
        phone: ""
    });
    
    const onChangeInput = e => setUser ({...user, [e.target.name]: e.target.value})

    const sendData = async e => {
        e.preventDefault();
        let userData = JSON.parse(localStorage.getItem('userData'));
        if (userData == null) {
            userData = [];
        }

        userData.push(user);
        localStorage.setItem('userData', JSON.stringify(userData));

        setUser({
            name: "",
            email: "",
            birthDate: "",
            phone: ""
        })
        console.log(user);
    }

    return (
        <section className="mainSection">
                <Form>
                    <h2>Cadastro</h2>
                    
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="name" 
                        className="formInput" 
                        type="text" 
                        placeholder="Fulano Belatrano de Oliveira da Silva" 
                        onChange={onChangeInput} 
                        value={user.name} 
                        required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" 
                        className="formInput" 
                        type="email" 
                        placeholder="fulanobos@gmail.com" 
                        onChange={onChangeInput} 
                        value={user.email} 
                        required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupBirth">
                        <Form.Label>Nascimento</Form.Label>
                        <Form.Control name="birthDate" 
                        className="formInput" 
                        type="date" 
                        placeholder="13/10/1995" 
                        onChange={onChangeInput} 
                        value={user.birthDate} 
                        required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPhone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control name="phone" 
                        className="formInput" 
                        type="number" 
                        placeholder="(31) 9 9666-1111" 
                        onChange={onChangeInput} 
                        value={user.phone} 
                        required />
                    </Form.Group>

                    <Button onClick={sendData} className="customButton">Cadastrar</Button>
                </Form>
        </section>
    )
}