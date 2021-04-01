import React from 'react';
import Routes from './routes';
import { TodoProvider } from './hooks/useStudentList';
import { HttpProvider } from './hooks/useHttp';

function App() {
    return (
        <TodoProvider>
            <HttpProvider>
                <Routes />
            </HttpProvider>
        </TodoProvider>
    );
}

export default App;
