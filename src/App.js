import "./App.css"
import Search from "./components/search";
import { Component } from "react"
import Card from "./components/cardlist";
import './components/searchbox.css'

class App extends Component{
  constructor(){
    super();
    this.state = {
      name:[],
      searchField: "",
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
  }).then((data)=>{
     this.setState({name:data});
  })
}

onChangeShow = (event)=>{
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState({searchField});
}


  render(){
    const {searchField, name} = this.state;
    const {onChangeShow} = this;
    const filter = name.filter((n)=>{
      return n.name.toLocaleLowerCase().includes(searchField);
    });
    return(
      <div className="App">
      <h1 className="app-title">MOnsters</h1>
      <Search onChangeHandler={onChangeShow}
      placeholder='Enter MOnster Name'
      className='Monster-Search-box'
      />
      <Card monsters={filter}/>
      </div>
    )
  }
}




export default App

