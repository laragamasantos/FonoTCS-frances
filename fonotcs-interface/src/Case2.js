import './App.css';
import './Global.css';
import React, {Component} from "react";
import { NavLink } from 'react-router-dom'; 

export class Case2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: {},
    };
  }

  handleResponseChange = (question, value) => {
    this.props.handleResponseChange(+value);
    const newResponses = {
      ...this.state.responses,
      [question]: value
    };
    this.setState({ responses: newResponses });
  };

  handleSubmit = () => {
    console.log("Submitted values:", this.state.responses);
    window.scrollTo(0, 0);
  };

    render(){
        return(
            <div className='global'>                    
                <div className='container'>
                    <h2>Caso 2 de 2:</h2>
                    <p>Paciente do sexo masculino com 35 anos de idade e queixa: “minha voz está fraca”. Trabalha como motorista de taxi e queixa que em algumas situações os passageiros não entendem o que ele fala. </p>
                    <p><strong>Se você está pensando em...</strong> &nbsp; Diagnóstico de disfonia comportamental associada a um quadro laríngeo de pólipo de pregas vocais</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na avaliação perceptivo-auditiva qualidade vocal do tipo soprosa de grau moderado</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest1" value="0.71" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest1" value="1" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest1" value="0.28" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest1" value="1" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest1" value="0.57" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Se você está pensando em...</strong> &nbsp;Diagnóstico de disfonia comportamental associada a um quadro laríngeo de nódulos de pregas vocais</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na anamnese o relato do paciente de piora da qualidade vocal após um processo gripal</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest2" value="0.33" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest2" value="1" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest2" value="0.44" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest2" value="0.66" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest2" value="0.33" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Se você está pensando em...</strong> &nbsp; Diagnóstico de disfonia comportamental associada a um quadro laríngeo de cisto de pregas vocais</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na avaliação fonoaudiológica melhora da qualidade da voz na tarefa de emissão em forte intensidade</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest3" value="1" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest3" value="0.77" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest3" value="0.33" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest3" value="0.55" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest3" value="0.11" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Se você está pensando em...</strong> &nbsp; Diagnóstico de disfonia orgânica associada a um quadro laríngeo de paralisia de pregas vocais</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na avaliação fonoaudiológica melhora da qualidade da voz na tarefa de cabeça rodada para a esquerda</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest4" value="0.06" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest4" value="0.06" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest4" value="0.06" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest4" value="0.37" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest4" value="1" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <NavLink className='btn form' to='/casemanager' onClick={this.handleSubmit}>Next question</NavLink>
                </div>
            </div>
        )
    }
}