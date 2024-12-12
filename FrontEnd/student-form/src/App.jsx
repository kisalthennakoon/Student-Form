import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Form from './Pages/Form.jsx';
import DetailsEdit from './Pages/DetailsEdit.jsx';
import AuthPopup from './PopUps/SIgnup.jsx';
import EditDetails from './Pages/DetailsEdit.jsx';

import './App.css';

const App = () => {
    const [isAuthPopupOpen, setAuthPopupOpen] = useState(true);
    const [userId, setUserId] = useState(null);

    const handleSignIn = (id) => {
        setUserId(id);
        setAuthPopupOpen(false);
    };

    return (
        <Router>
            <Header />
            {isAuthPopupOpen && <AuthPopup open={isAuthPopupOpen} onClose={() => setAuthPopupOpen(false)} onSignIn={handleSignIn} />}
            {!isAuthPopupOpen && (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home1" element={<EditDetails userId={userId}/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Form userId={userId} />} />
                    <Route path="/sign-in" element={<DetailsEdit userId={userId} />} />
                </Routes>
            )}
            <Footer />
        </Router>
    );
};

export default App;
