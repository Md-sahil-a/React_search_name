import { Component } from "react";

import './allcard.css'

class AllCards extends Component{
    render(){
        const {id, name, email} = this.props.monster;
        return(
            <div className="card-container" key={id}>
            <img alt={`monsters-name ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h1>{name}</h1>
            <h1>{email}</h1>
            </div>

        );
    }

}


export default AllCards;