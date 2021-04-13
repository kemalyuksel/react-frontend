import React , {Component} from 'react';
import './App.css';

import NoteService from './services/NoteService';
import Note from './components/Note';


class App extends Component {

  state = {
      notes:[],
        id:0,
        name:"",
        description:""
  }

  componentDidMount(){
    NoteService.getAllNotes()
    .then(response => response.data)
    .then(data => {
      this.setState({notes: data})
    });
  }

  componentDidUpdate(){
    NoteService.getAllNotes()
    .then(response => response.data)
    .then(data => {
      this.setState({notes: data, })
    });
  }
  
  clearInputs = () => {
    this.setState({
      id:0,
      name:"",
      description:""
    })
  }

  handleChange = (event) =>  {
    this.setState({[event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let note = {name: this.state.name ,  description:this.state.description,id:this.state.id};

    if(note.id.value !== 0 && note.id.value !== undefined){
      NoteService.updateNote(note.id,note);
      this.clearInputs();
    }
    else{
      NoteService.createNote(note);
      this.clearInputs();
    }
  }


  deleteNote = (e) => {
    NoteService.deleteNote(e.target.value);
  }
  
  render() {

    const notes = this.state.notes;

    return(
      <div className="App">
        <h1> My Notes </h1> 
        
        <form onSubmit={this.handleSubmit}>

        <div className="formElement">
            <label className="formLabel" >  |For Update| Id: </label>
            <input name="id" className="formInput" value={this.state.id}  onChange={this.handleChange} type="text"/>
          </div>
          
          <div className="formElement">
            <label className="formLabel" >Name: </label>
            <input name="name" className="formInput" value={this.state.name}  onChange={this.handleChange} type="text"/>
          </div>

          <div className="formElement">
            <label  className="formLabel">Description: </label>
            <input  name="description" className="formInput" value={this.state.description}  onChange={this.handleChange} type="text"/>
          </div>

          <div className="formElement">
          <button className="btn" type="submit"> Add Note</button>
          </div>

        </form>

        {notes.map(note => (
          <Note key={note.id} {...note} deleteNote={this.deleteNote} />
        ))}
      </div>
    )
  }

  
}


export default App;
