import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Form from './Pages/Form.jsx';
import DetailsEdit from './Pages/DetailsEdit.jsx';  


import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Form />} />
                <Route path="/sign-in" element={<DetailsEdit />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
