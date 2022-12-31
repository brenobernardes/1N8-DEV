import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import './user.css';

export default function User () {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/return").then((res) => {
            setList(res.data);
        });
    }, []);
    

    return (
        <div className="userContent">

            <h2>Lista de Cadastro</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data de Nascimento</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                {list.map((val) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.birthDate}</td>
                                <td>{val.phone}</td>
                            </tr>
                        </tbody>                                
                    )
                })}                              
            </Table>
        </div>
    )
}