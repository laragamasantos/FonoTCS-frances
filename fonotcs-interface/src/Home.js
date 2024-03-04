import './App.css';
import './Home.css';
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import Title from './imgs/title.png';
import Logo from './imgs/logo.png';
import Ufmg from './imgs/ufmg.png';

export class Home extends Component {
    render() {
        return (
            <div className='App'>

                <header className='App-header'>
                    <nav className='navbar'>
                        <div className='navbar-list'>
                            <NavLink className='btn' to='/Login'>Login</NavLink>

                            <NavLink className='btn' to='/Register'>Criar conta</NavLink>

                        </div>
                    </nav>
                </header>

                <div className='top-div-container'>
                    <div className='top-div'>
                        <img className='title-img' src={Title} alt="FonoTCS project name" />
                    </div>
                </div>

                <img className='logo-img' src={Logo} alt="FonoTCS project logo" />

                <div className='text'>
                    <p>
                        O FonoTCS é um teste de avaliação de raciocínio clínico em Fonoaudiologia, baseado em casos apresentados em diferentes cenários (hospitais, clínicas e Unidades Básicas de Saúde) que incorporam elementos de incerteza. Este teste foi concebido para a avaliação de estudantes e jovens fonoaudiólogos.
                    </p>
                </div>

                <img className='ufmg-img' src={Ufmg} alt="UFMG logo" />

            </div>
        );
    }
}

