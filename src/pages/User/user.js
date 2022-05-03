import React from "react";
import Table from 'react-bootstrap/Table';
import './user.css';

export default function User () {
    let list = function () {
        let userData = localStorage.getItem('userData');
        return JSON.parse(userData);
    }

    return (
        <div className="userContent">

            <h2>Lista de Cadastro</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data de Nascimento</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                {list().map( function (userData, i) {
                    return (
                        <tbody key={i}>
                            <tr>
                                <td>{userData.name}</td>
                                <td>{userData.email}</td>
                                <td>{userData.birthDate}</td>
                                <td>{userData.phone}</td>
                            </tr>
                        </tbody>                                
                    )
                })}                              
            </Table>
        </div>
    )
}