import React from 'react';
import Routes from './routes';
import { TodoProvider } from './hooks/useStudentList';
import MainLayout from './containers/MainLayout/MainLayout';
function App() {
    return (
        <TodoProvider>
            <MainLayout>
                <Routes />
            </MainLayout>
        </TodoProvider>
    );
}

export default App;
