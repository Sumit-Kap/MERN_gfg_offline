

const initialState = {
    money: 0
}

const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return {
                ...state,
                money: state.money + action.payload
            }
            case 'WITHDRAWL':
                return {
                    ...state,
                    money: state.money - action.payload
                }
                case 'BANKRUPTCY':
                    return {
                        ...state,
                        money: 0
                    }
        default:
            return state;
    }
}

export default bankingReducer;