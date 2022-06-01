import { Component } from "react";
import './cardlist.css'
import AllCards from "./mutliple-cards";

class Card  extends Component{
    render(){
        const {monsters} = this.props;
       return (
           <div className="card-list">
           {
               monsters.map((monster)=>{
                   return (
                       <AllCards monster={monster}/>
                   )
               })
           }
           </div>
       )
    }
}


export default Card;