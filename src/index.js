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


import React from "react";
import ReactDOM from "react-dom";

class Agua extends React.Component {
    state = { estado: 'liquido', temperatura: '29'};

    constructor() {
        super();
        this.verEstado = this.verEstado.bind(this);
        this.estadoGelado = this.estadoGelado.bind(this);
        this.estadoLiquido = this.estadoLiquido.bind(this);
        this.estadoGasoso = this.estadoGasoso.bind(this);
    }

    verEstado(event) {
        console.log("Estado atual: " + this.state.estado);
    }

    estadoGelado(event) {
        this.setState( { estado: 'gelado', temperatura: '-273'} );
    }

    estadoLiquido(event) {
        this.setState( { estado: 'liquido', temperatura: '29'} );
    }

    estadoGasoso(event) {
        this.setState( { estado: 'gasoso', temperatura: '150'} );
    }

    render() {
        return (
            <div>
                <p>Propriedades da água:</p>
                <p>Fusão: {this.props.fusao} graus</p>
                <p>Ebulição: {this.props.ebulicao} graus</p>
                <p>Condição: {this.props.condicao}</p>
                
                <button onClick={ this.verEstado } > Ver estado</button>
                
                <button onClick={ this.estadoGelado } > Gelado </button>
                <button onClick={ this.estadoLiquido } > Liquido </button>
                <button onClick={ this.estadoGasoso } > Gasoso </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Agua fusao={0} ebulicao={100} condicao="CNTP" />,
    document.getElementById("root")
);