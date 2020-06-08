import React from 'react';
import Routes from './routes';
import { TodoProvider } from './hooks/useStudentList';
function App() {
    return (
        <TodoProvider>
            <Routes />
        </TodoProvider>
    );
}

export default App;
