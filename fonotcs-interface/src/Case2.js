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
                    <h2>Cas 2 de 2:</h2>
                    <p>Patient de sexe masculin, 35 ans, se plaint : “ma voix est faible”. Travaille comme chauffeur de taxi et se plaint que dans certaines situations, les passagers ne comprennent pas ce qu'il dit. </p>
                    <p><strong>Si vous envisagez de...</strong> &nbsp; Diagnostic de dysphonie comportementale associée à un tableau laryngé de polype des plis vocaux</p>
                    <p><strong>Et vous trouvez...</strong> &nbsp; Lors de l'évaluation perceptive-auditive, une qualité vocale de type sifflante de degré modéré</p>
                    <p><strong>La décision devient :</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest1" value="0.71" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>-2: Fortement contre-indiquée</li></label>
                        <label><li><input type="radio" name="quest1" value="1" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>-1: Peu utile</li></label>
                        <label><li><input type="radio" name="quest1" value="0.28" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>0: Ni plus ni moins utile</li></label>
                        <label><li><input type="radio" name="quest1" value="1" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>+1: Indiquée</li></label>
                        <label><li><input type="radio" name="quest1" value="0.57" onChange={(e) => this.props.handleResponseChange("quest1", parseFloat(e.target.value))}/>+2: Fortement indiquée</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Si vous envisagez de...</strong> &nbsp;Diagnostic de dysphonie comportementale associée à un tableau laryngé de nodules des plis vocaux</p>
                    <p><strong>Et vous trouvez...</strong> &nbsp; Dans l'anamnèse, le patient rapporte une détérioration de la qualité vocale après un épisode grippal</p>
                    <p><strong>La décision devient :</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest2" value="0.33" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>-2: Fortement contre-indiquée</li></label>
                        <label><li><input type="radio" name="quest2" value="1" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>-1: Peu utile</li></label>
                        <label><li><input type="radio" name="quest2" value="0.44" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>0: Ni plus ni moins utile</li></label>
                        <label><li><input type="radio" name="quest2" value="0.66" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>+1: Indiquée</li></label>
                        <label><li><input type="radio" name="quest2" value="0.33" onChange={(e) => this.props.handleResponseChange("quest2", parseFloat(e.target.value))}/>+2: Fortement indiquée</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Si vous envisagez de...</strong> &nbsp;Diagnostic de dysphonie comportementale associée à un tableau laryngé de kyste des plis vocaux</p>
                    <p><strong>Et vous trouvez...</strong> &nbsp; Lors de l'évaluation orthophonique, une amélioration de la qualité de la voix dans la tâche d'émission à forte intensité</p>
                    <p><strong>La décision devient :</strong></p>
                    <ul>
                        <label><li><input type="radio" name="quest3" value="1" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>-2: Fortement contre-indiquée</li></label>
                        <label><li><input type="radio" name="quest3" value="0.77" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>-1: Peu utile</li></label>
                        <label><li><input type="radio" name="quest3" value="0.33" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>0: Ni plus ni moins utile</li></label>
                        <label><li><input type="radio" name="quest3" value="0.55" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>+1: Indiquée</li></label>
                        <label><li><input type="radio" name="quest3" value="0.11" onChange={(e) => this.props.handleResponseChange("quest3", parseFloat(e.target.value))}/>+2: Fortement indiquée</li></label>
                    </ul>
                    <hr/>
                    <p><strong>Si vous envisagez de...</strong> &nbsp;Diagnostic de dysphonie organique associée à un tableau laryngé de paralysie des plis vocaux</p>
                    <p><strong>Et vous trouvez...</strong> &nbsp; Lors de l'évaluation orthophonique, une amélioration de la qualité de la voix dans la tâche de rotation de la tête vers la gauche</p>
                    <p><strong>La décision devient :</strong></p>
                    <

ul>
                        <label><li><input type="radio" name="quest4" value="0.06" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>-2: Fortement contre-indiquée</li></label>
                        <label><li><input type="radio" name="quest4" value="0.06" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>-1: Peu utile</li></label>
                        <label><li><input type="radio" name="quest4" value="0.06" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>0: Ni plus ni moins utile</li></label>
                        <label><li><input type="radio" name="quest4" value="0.37" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>+1: Indiquée</li></label>
                        <label><li><input type="radio" name="quest4" value="1" onChange={(e) => this.props.handleResponseChange("quest4", parseFloat(e.target.value))}/>+2: Fortement indiquée</li></label>
                    </ul>
                    <NavLink className='btn form' to='/casemanager' onClick={this.handleSubmit}>Envoyer</NavLink>
                </div>
            </div>
        )
    }
}
