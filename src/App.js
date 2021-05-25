import React, { Component, Fragment } from 'react';
import { Grid,Typography, } from '@material-ui/core';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';
import Save from './Components/Save/Save';

class App extends Component {

  state = {
    cards: [
    {id:'12!wq', name:'jems wald', descriptions:'This is a card of projects'},
    {id:'23@wq', name:'Martha jadega', descriptions:'This is a martha project'},
  ],
  newPost: false,
  onUpdate: false,
  id: '',
  name: '',
  descriptions: ''
  }

  onNewPostHandler = () =>{
    this.setState({newPost: true, onUpdate:false, id:'',name:'',descriptions:''});
  }

  onNewUserHandler = () =>{
    this.setState({newPost: false, onUpdate: false,id:'',name:'',descriptions:''});
  }

  onDeleteCard=(card)=>{
    const filterCard = this.state.cards.filter(c => c.id !== card.id);
    this.setState({cards:filterCard});
    // console.log(filterCard);
  }

  onAddEdit = (card) => {
    this.setState({onUpdate: true,id: card.id,name: card.name, descriptions: card.descriptions});
  }

  onChangeSave = (event) => {
    this.setState({[event.target.name]: event.target.value});
    // console.log(event.target.name);
    // console.log(event.target.value);

  }

  onSaveHandler = () =>{
    const {id,name,descriptions} = this.state;
    if(id ===''|| name ==='' || descriptions ==='') return(alert('input field must not be empty :)'))
    const Card = {id,name,descriptions};
    const cardIndex = this.state.cards.findIndex(c => c.id === id);
    const Cards = [...this.state.cards];
    if(cardIndex === -1) Cards.push(Card);
    
    else Cards[cardIndex] = Card;

    this.setState({cards : Cards});
    this.onNewUserHandler();
  }

  render() {
    let cards = this.state.cards.map((card,index)=>{
      return <Card 
        key={card.id}
        id={card.id}
        name={card.name}
        descriptions={card.descriptions}
        delet={this.onDeleteCard.bind(this, card)}
        edit={this.onAddEdit.bind(this,card)}
        
      />;
    });
    let save =(
      <Save 
        home={this.onNewUserHandler}
        id={this.state.id}
        name={this.state.name}
        descriptions={this.state.descriptions}
        change={this.onChangeSave}
        isUpdate={this.state.onUpdate}
        save={this.onSaveHandler}
       />
    )

    return (
      <Fragment>
      < Navbar newPost={this.onNewPostHandler} />
      <Grid container >
      <Grid sm={2} item></Grid>
      <Grid sm={8} item>
      {this.state.newPost || this.state.onUpdate? save:cards}
      </Grid>
      <Grid sm={2} item></Grid>
      </Grid>
      <Typography align="center" style={{marginTop: '2rem'}}>
        Welcome to my React Project <span style={{color:'red'}}>❤</span>
      </Typography>
      </Fragment>
    );
  }
}
export default App;