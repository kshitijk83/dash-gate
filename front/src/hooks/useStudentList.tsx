import React, { FC, useReducer, Dispatch, useMemo } from 'react';
import * as fakeData from '../utils/fakeData';
enum ACTION_TYPES {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    CLEAR = 'CLEAR',
    SET = 'SET',
}

interface IAction {
    type: ACTION_TYPES;
    data: any;
}
const studentsObj: student[] = fakeData.createStudents(30);
type contextValue = [student[], Dispatch<IAction>];

const StudentListContext = React.createContext<contextValue>([[], () => {}]);

type listReducer = (prevState: student[], action: IAction) => student[];
function listReducer(prevState: student[], action: IAction) {
    switch (action.type) {
        case ACTION_TYPES.SET:
            return action.data;
        case ACTION_TYPES.ADD:
            return [action.data, ...prevState];
        case ACTION_TYPES.UPDATE:
            return prevState;
        case ACTION_TYPES.DELETE:
            return prevState;
        case ACTION_TYPES.CLEAR:
            return prevState;
        default:
            throw new Error('should reach here!!');
    }
}

const TodoProvider: FC = (props) => {
    const [state, dispatch] = useReducer(listReducer, studentsObj);
    const value: contextValue = useMemo(() => [state, dispatch], [state]);
    return <StudentListContext.Provider value={value} {...props} />;
};

const useStudentList = () => {
    const context = React.useContext(StudentListContext);
    if (!context) {
        throw new Error('useStudentList must be used within a TodoProvider');
    }
    const [state, dispatch] = context;

    const set = (data: student[]) => {
        dispatch({ type: ACTION_TYPES.SET, data });
    };
    return { state, dispatch, set };
};

export { useStudentList, TodoProvider };
