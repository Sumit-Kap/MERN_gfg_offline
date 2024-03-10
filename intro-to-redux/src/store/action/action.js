export const deposit = (type, payload) => {
    return {
        type,
        payload
    }
}

export const withdrawl = (type, payload) => {
    return {
        type,
        payload
    }
}

export const bankruptcy = (type) => {
    return {
        type
    }
}
// async action
export const fetchUsers = (type) => {
    console.log(type);
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
            return response.json();
        }).then((data) => {
            const users = data;
            console.log(users);
            dispatch({ type, users });
        }).catch()
    }
}