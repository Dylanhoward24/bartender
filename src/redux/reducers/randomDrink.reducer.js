const randomDrinkReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RANDOM_DRINK':
            return action.payload;
        default:
            return state;
    }
};

// randomDrink will be on the redux state at:
// state.randomDrink
export default randomDrinkReducer;