import { HTTP_ACTION_TYPES } from '../actionConstants';

type state = {
    isLoading: boolean;
    errorObj: object;
    errorMessage: string;
    data: any;
    successMessage: string;
    identifier: string;
};

const httpReducer = (curState: any, action: any ) => {
    switch (action.type) {
        case HTTP_ACTION_TYPES.SENDING:
            return {
                ...curState,
                isLoading: true,
                errorObj: {},
                errorMessage: '',
                data: '',
                successMessage: '',
                identifier: action.identifier,
            };
        case HTTP_ACTION_TYPES.RESPONSE:
            return {
                ...curState,
                isLoading: false,
                data: action.data,
                successMessage: action.successMessage,
            };
        case HTTP_ACTION_TYPES.ERROR:
            return {
                ...curState,
                isLoading: false,
                errObj: action.errObj,
                errorMessage: action.errorMessage,
            };
        case HTTP_ACTION_TYPES.CLEAR:
            return {
                ...curState,
                isLoading: false,
                errorObj: null,
                data: null,
                identifier: null,
                successMessage: null,
            };
        default:
            throw new Error('should not reach here!!');
    }
};

export default httpReducer;
