import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from '../../components/button/button.js'
import './cadastro.css';

export default function Cadastro () {
    return (
        <section className="mainSection">
                <Form>
                    <h2>Cadastro</h2>
                    
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Fulano Belatrano de Oliveira da Silva" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="fulanobos@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupBirth">
                        <Form.Label>Nascimento</Form.Label>
                        <Form.Control type="date" placeholder="13/10/1995" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPhone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="number" placeholder="(31) 9 9666-1111" />
                    </Form.Group>

                    <Button />
                </Form>
        </section>
    )
}