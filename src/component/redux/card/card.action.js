import cardTypes from './card.types';

export const lonely = (cardTitle) => {
    return {
        type:cardTypes.SET_LONELY,
        payload:cardTitle
    }
}

export const baby = (cardBaby) => {
    return {
        type:cardTypes.SET_BABY,
        payload:cardBaby
    }
}

export const teen = (cardTeen) => {
    return {
        type:cardTypes.SET_TEEN,
        payload:cardTeen
    }
}