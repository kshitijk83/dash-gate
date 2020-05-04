import React, { FC, useReducer, Dispatch, useMemo } from 'react';

enum ACTION_TYPES {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    CLEAR = 'CLEAR',
}

interface IAction {
    type: ACTION_TYPES;
}

type student = {
    id: string;
    name: string;
    rollno: string;
    gender: 'M' | 'F';
    year: '1st' | '2nd' | '3rd' | '4th' | '5th';
    hostel:
        | 'UBH'
        | 'DBH'
        | 'Himadgri'
        | 'Himgiri'
        | 'KBH'
        | 'NBH'
        | 'PGH'
        | 'AGH';
};

const studentObj: student = {
    id: Math.random().toString(),
    name: 'Kshitiz Kumar',
    rollno: '17MI513',
    gender: 'M',
    year: '3rd',
    hostel: 'UBH',
};
type contextValue = [student[], Dispatch<IAction>];

const StudentListContext = React.createContext<contextValue>([[], () => {}]);

type listReducer = (prevState: student[], action: IAction) => student[];
function listReducer(prevState: student[], action: IAction) {
    switch (action.type) {
        case ACTION_TYPES.ADD:
            return prevState;
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
    const [state, dispatch] = useReducer(listReducer, [studentObj]);
    const value: contextValue = useMemo(() => [state, dispatch], [state]);
    return <StudentListContext.Provider value={value} {...props} />;
};

const useStudentList = () => {
    const context = React.useContext(StudentListContext);
    if (!context) {
        throw new Error('useStudentList must be used within a TodoProvider');
    }
    const [state, dispatch] = context;
    return { state, dispatch };
};

export { useStudentList, TodoProvider };
