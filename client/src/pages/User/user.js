import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import './user.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function User () {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/return").then((res) => {
            setList(res.data);
            console.log(res.data)
        });
    }, []);


    // create delete data from database
    
     
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
                {list.map((props, index) => {

                    const handleDelete = (id) => {
                        id = props.id;
                        axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
                            window.location.reload();
                        })
                    }
                    return (
                        <tbody key={index}>
                            <tr key={props.id}>
                                <td>{index+1}</td>
                                <td>{props.name}</td>
                                <td>{props.email}</td>
                                <td>{props.birthDate}</td>
                                <td>{props.phone}</td>
                                <td><DeleteIcon className="buttonDelete" onClick={handleDelete}></DeleteIcon></td>
                            </tr>
                        </tbody>                                
                    )
                })}                              
            </Table>
        </div>
    )
}