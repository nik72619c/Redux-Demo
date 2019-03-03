import React,{Component } from 'react';
import {store} from '../store/store';

export class Like extends Component {

    
    doOperation(event) {

         
        if(event.target.innerHTML==='like'){

            store.dispatch({type: 'like',payload : {value: 1}});
        }

        else if(event.target.innerHTML==='dislike'){

            store.dispatch({type: 'dislike', payload : {value: 1}});
        }

    }

    render(){

        return (

            <div> 

             <div><button onClick={this.doOperation.bind(this)}>like</button></div>
             <div><button onClick={this.doOperation.bind(this)}>dislike</button></div>

        </div>
        )


    }
    }