import cardTypes from './card.types';

const INITIAL_STATE ={
    cardTitle:'lonely boy',
    cardBaby: 'Happy Baby',
    cardTeen: 'Teenage Boy'
}


const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cardTypes.SET_LONELY:
            return{...state, cardTitle:action.payload}
        case cardTypes.SET_BABY:
            return{...state, cardBaby:action.payload}
        case cardTypes.SET_TEEN:
            return{...state, cardTeen:action.payload}
        default:
            return state;
    }
}

export default cardReducer