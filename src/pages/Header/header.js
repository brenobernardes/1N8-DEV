import React from "react";
import Cadastro from "../Cadastro/cadastro";
import User from "../User/user";
import Footer from "../Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export default function Home () {
    return (
        <div>
            <header>
                <div className="header">
                    <ul>
                        <li>Cadastro </li>
                        <li>Lista</li>
                        <li>Sobre mim</li>
                    </ul>

                    <h1> <span>Estágio</span> <br/> de prova de seleção</h1>
                </div>
            </header>
            <Cadastro />
            <User />
            <Footer />
        </div>
    );
}