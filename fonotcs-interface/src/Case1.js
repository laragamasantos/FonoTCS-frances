import './App.css';
import './Global.css';
import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export class Case1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          responses: {},
          totalScore: 0 
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
        // Here you can send the values to the global form manager
        console.log("Submitted values:", this.state.responses);
        console.log("Total score:", this.state.totalScore);
        window.scrollTo(0, 0);
        // Here you can reset the state if needed
        // this.setState({ responses: {}, totalScore: 0 });
      };
    
    render(){
        return(
            <div className='global'>                    
                <div className='container'>
                    <h2>Caso 1 de 2:</h2>
                    <p>Paciente com 21 anos, estudante universitário, refere perda auditiva desde a infância e relata piora progressiva da audição há 5 anos. Atualmente apresenta grande dificuldade para compreender a fala, o que prejudica seu aprendizado.  </p>
                    <p><strong>Se você está pensando em...</strong> &nbsp; Realizar o exame de Processamento Auditivo</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na anamnese o relato que o paciente tem vários familiares com perda auditiva</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest1" value="0.77" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest1" value="1" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest1" value="0.22" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest1" value="0.55" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest1" value="0.22" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Se você está pensando em...</strong> &nbsp; Encaminhar para a avaliação de Implante Coclear</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na logoaudiometria limiares de recepção de fala de 45 dB bilateralmente</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest2" value="1" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest2" value="0.33" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest2" value="0.13" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest2" value="0.13" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest2" value="0.06" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Se você está pensando em...</strong> &nbsp; Adaptar aparelhos de amplificação sonora individual</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na audiometria o seguinte resultado:</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest3" value="0.06" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest3" value="0" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest3" value="0" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest3" value="0.41" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest3" value="1" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Se você está pensando em...</strong> &nbsp; Encaminhar para a reabilitação auditiva</p>
                    <p><strong>E você encontra...</strong> &nbsp; Na anamnese o relato de que o paciente faz uso de leitura orofacial para ajudar a compreender o que as pessoas dizem e se comunica por meio de Libras com os familiares surdos</p>
                    <p><strong>A decisão torna-se:</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest4" value="0" required onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>-2: Fortemente contraindicada</li></label>
                        <label><li><input type="radio" name="quest4" value="0.42" required onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>-1: Pouco útil</li></label>
                        <label><li><input type="radio" name="quest4" value="0.16" required onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>0: Nem mais, nem menos útil</li></label>
                        <label><li><input type="radio" name="quest4" value="1" required onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>+1: Indicada</li></label>
                        <label><li><input type="radio" name="quest4" value="0.5" required onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>+2: Fortemente indicada</li></label>
                    </ul>
                    <NavLink className="btn form" to="/case2" onClick={this.handleSubmit}>Next question</NavLink>
                </div>
            </div>
        )
    }
}