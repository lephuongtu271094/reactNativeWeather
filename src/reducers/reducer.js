import { GET_DATA } from '../constants/constaitsAction';

const getDataReducer = (data = [], actions) => {
    switch (actions.type) {
        case GET_DATA:
            return [
                ...data
            ]
        default:
            return data;
    }

}

export default getDataReducer;
