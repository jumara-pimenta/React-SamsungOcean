// AULA 01

// import React from 'react';
// import ReactDOM from 'react-dom';


// const lista = [
//     {
//         id: 10,
//         nome: "Antonio"
//     } ,
//     {
//         id: 20,
//         nome: "Deusany"
//     } ,
//     {
//         id: 30,
//         nome: "de Carvalho"
//     } ,
//     {
//         id: 40,
//         nome: "Junior"
//     }
// ];

// function Pessoas() {
//     return (
//         <div className="pessoas">
//             {
//                 lista.map(
//                     (item, index) => (
//                         <p>{index} : {item.nome}</p>
//                     )
//                 )
//             }
//         </div>
//     )
// }

// function Pessoa(props) {
//     return (
//         <div className="pessoa">
//             id={lista[props.id - 1].id} : 
//             nome={lista[props.id - 1].nome}
//         </div>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Pessoas />
//         <Pessoa id={2} />
//     </div>,
//     document.getElementById("root")
// )

// Aula 02


import React from "react";
import ReactDOM from "react-dom";
import Agua from "./Agua";
import Inicial from "./Inicial";
import Contato from "./Contato";
import {Route, NavLink, HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <div>
            <h1>Single Page Application - SPA</h1>
            <ul>
                <li>
                    <NavLink to="/">Água</NavLink>
                </li>
                <li>
                    <NavLink to="/inicial">Inicial</NavLink>
                </li>
                <li>
                    <NavLink to="/contato">Contato</NavLink>
                </li>
            </ul>
            <div>
                <Route exact path="/" component={Agua} />
                <Route path="/inicial" component={Inicial} />
                <Route path="/contato" component={Contato} />
            </div>
        </div>
    </HashRouter>,
    document.getElementById("root")
);