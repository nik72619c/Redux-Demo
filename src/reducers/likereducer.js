const likeState={

    like: 0
};



export const likeReducer=(state=likeState,action)=>{
console.log("inside likereducer...");
console.log("like state...",likeState);
    console.log("action received is",action);
    var newState={like:0};
    if(action.type==='like'){

        newState.like=state.like + action.payload.value;
        console.log("action.payload.value",action.payload);

    }

    else if(action.type==='dislike'){
        newState.like=state.like-action.payload.value;
    }

    console.log("new state is",newState);
    return newState;

}