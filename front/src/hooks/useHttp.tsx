import React, { useReducer, useMemo, useCallback, Dispatch, FC } from 'react';
import axiosInstance from '../api/instance';
import httpReducer from './httpReducer';
// import { HTTP_ACTION_TYPES } from '../actionConstants';

const initState = {
    isLoading: false,
    errorObj: {},
    errorMessage: '',
    data: null,
    identifier: '',
    successMessage: '',
};

type httpstate = {
    isLoading: boolean;
    errorObj: object;
    errorMessage: string;
    data: any;
    successMessage: string;
    identifier: string;
};

enum HTTP_ACTION_TYPES {
    SENDING = 'SENDING',
    RESPONSE = 'RESPONSE',
    ERROR = 'ERROR',
    CLEAR = 'CLEAR',
}

interface IAction {
    type: HTTP_ACTION_TYPES;
    identifier?: string;
    data?: any;
    successMessage?: string;
    errorObj?: any;
    errorMessage?: any;
}

type contextValue = [httpstate, Dispatch<IAction>];
const HttpCtx = React.createContext<contextValue>([initState, () => {}]);

const HttpProvider: FC = (props) => {
    const [state, dispatch] = useReducer(httpReducer, initState);
    const value: contextValue = useMemo(() => [state, dispatch], [state]);
    // eslint-disable-next-line
    return <HttpCtx.Provider value={value} {...props} />;
};

const useHttp = () => {
    const ctx = React.useContext(HttpCtx);
    if (!ctx) {
        throw new Error('useHttp must be used within HttpProvider');
    }
    const [state, dispatch] = ctx;
    // const [state, dispatch] = useMemo(() => [ctx.state, ctx.dispatch], [ctx.state]);
    const clear = useCallback(
        () => dispatch({ type: HTTP_ACTION_TYPES.CLEAR }),
        // eslint-disable-next-line
        []
    );

    const sendRequest = useCallback(
        async ({ url, method, data, identifier, headers, actionFn }) => {
            dispatch({ type: HTTP_ACTION_TYPES.SENDING, identifier });
            return axiosInstance({
                url,
                method,
                data,
                headers,
            })
                .then((response) => {
                    let { data: responseData } = response.data;
                    let successMessage = response.data.message;
                    if (
                        response.headers['content-type'] ===
                        'text/yaml; charset=UTF-8'
                    ) {
                        responseData = response.data;
                        successMessage = 'file downloaded';
                    }
                    dispatch({
                        type: HTTP_ACTION_TYPES.RESPONSE,
                        data: responseData,
                        successMessage,
                    });
                    if (actionFn) actionFn(responseData);
                    return { response: responseData };
                    // dispatch({ type: HTTP_ACTION_TYPES.CLEAR });
                })
                .catch((error) => {
                    const errorMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        'Some Error Occured!';
                    dispatch({
                        type: HTTP_ACTION_TYPES.ERROR,
                        errorObj: error,
                        errorMessage,
                    });
                    // eslint-disable-next-line
                    // return { error };
                    // dispatch({ type: HTTP_ACTION_TYPES.CLEAR });
                });
        },
        // eslint-disable-next-line
        []
    );

    return {
        clear,
        sendRequest,
        state,
    };
};

export { HttpProvider, useHttp };
