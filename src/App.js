import React from 'react';
import './App.css';
import Profil from './Profil/Profil';

class  App extends React.Component{
  
  constructor(props) {
    super(props);
  this.state = {fullName: "Ngarison", bio:"Gentil", imgSrc:"./voiture.png", profession:"ingénieur", shows:false, timer:0};
  }

    render() { 
      let myProfil;
      if(this.state.shows===false){
         myProfil=<div>Vous n'avez pas encore cliqué pour afficher le profil!</div>
      }else{
        myProfil = <Profil fullName={this.state.fullName} bio={this.state.bio} profession={this.state.profession} imgSrc={this.state.imgSrc}/>;
      }

      /*function myTimer() {
        const date = new Date();
      return date.toLocaleTimeString();
      }*/
      
     function componentDidMount() {
       let compteur =0;
        setInterval(() => {
          compteur++;
          this.setState({ timer:compteur });
        }, 2000);
      }

      componentDidMount();

    return (
      <>
        <label>{this.state.timer }</label>
        <button onClick={()=>{ this.setState({shows:true});}}>SHOW PROFIL</button>
        {myProfil}
      </>
      );
    }
}

export default App;
