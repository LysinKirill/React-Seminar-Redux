import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserDetailsPage from './pages/UserDetailsPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserListPage />} />
                <Route path="/users/:id" element={<UserDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
