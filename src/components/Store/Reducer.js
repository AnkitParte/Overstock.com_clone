


//const ADD = {type:"ADD"}
//const REMOVE = {type:"REMOVE"}

export default function Reducer(state,action){
    switch (action.type){
        case "ADD" : return ([...state,action.payload])
        case "REMOVE" : return filterMe([...state],action.payload)
        case "EMPTY" : return ([...action.payload])
        default : return state
    }
}

export function filterMe(state,item){
    let ans = state.filter((el)=>{
        if(el.id !== item.id){
            return el
        }
    })
    return [...ans];
}





