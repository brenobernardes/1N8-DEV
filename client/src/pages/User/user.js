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


    // create delete data from database
    const handleDelete = () => {
        axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
            
        })
    }
     
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
                {list.map((props) => {
                    return (
                        <tbody key={props.id}>
                            <tr>
                                <td>{props.id}</td>
                                <td>{props.name}</td>
                                <td>{props.email}</td>
                                <td>{props.birthDate}</td>
                                <td>{props.phone}</td>
                                <td><button>Editar</button><button onClick={handleDelete}>Excluir</button></td>
                            </tr>
                        </tbody>                                
                    )
                })}                              
            </Table>
        </div>
    )
}