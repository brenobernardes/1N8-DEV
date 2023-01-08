import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from '../../components/button/button.js'
import './cadastro.css';
import axios from "axios";

export default function Cadastro () {

    const [user, setUser] = useState({
        name: "",
        email: "",
        birthDate: "",
    });

    const [phone, setPhone] = useState({
        phone:""
    });

    const validatePhone = e => {
        const regexPhone = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
        const limit = 11;

        var str = e.target.value.replace(/[^0-9]/g, "").slice(0, limit)
        const result = str.replace(regexPhone, "($1) $2-$3");
        
        setPhone(result);
    }
    
    const onChangeInput = e => setUser ({...user, [e.target.name]: e.target.value})

    const sendData = () => {
        axios.post("http://localhost:3001/register", {
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            phone: phone
        })

        setUser({
            name: "",
            email: "",
            birthDate: ""
        })

        setPhone({
            phone: ""
        })

        window.location.reload();
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
                        type="text" 
                        placeholder="(31) 9 9666-1111" 
                        value={phone} 
                        onChange={validatePhone} 
                        required />
                    </Form.Group>

                    <Button onClick={sendData} className="customButton">Cadastrar</Button>
                </Form>
        </section>
    )
}