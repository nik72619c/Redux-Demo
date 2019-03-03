import React from 'react';
import { connect } from 'react-redux';

  const Likeresult=(props)=>{

    console.log("inside likeresult");
    console.log("likestate re render called...");
    return (
        
    <div>like value is {props.likeCount}</div>

)
  
}

const mapStateToProps=state=>{

    console.log("state in mapStateToProps is...",state);
    return {

        likeCount: state.like
    }
}

 export default connect(mapStateToProps)(Likeresult);