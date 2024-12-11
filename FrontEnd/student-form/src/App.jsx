import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
//import Home from './Pages/Home.jsx';
//import Form from './Pages/Form.jsx';
import SuccessPopup from './PopUps/Sucessful.jsx';
import UpdatedPopup from './PopUps/Updated.jsx';
import DeletedPopup from './PopUps/Deleted.jsx'


import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Form />} /> */}
                {/* <Route path="/" element={<SuccessPopup/>} /> */}
                {/* <Route path="/" element={<UpdatedPopup/>} /> */}
                <Route path="/" element={<DeletedPopup/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Header from './Components/Header.jsx';
// import Footer from './Components/Footer.jsx';
// import SuccessPopup from './PopUps/Sucessful.jsx';
// import './App.css';

// function App() {
//     return (
//         <Router>
//             <div className="app-container">
//                 {/* Header will be visible on all pages */}
//                 <Header />
//                 <main className="content">
//                     <Routes>
//                         {/* Define routes here */}
//                         <Route path="/" element={<SuccessPopup />} />
//                     </Routes>
//                 </main>
//                 {/* Footer will be visible on all pages */}
//                 <Footer />
//             </div>
//         </Router>
//     );
// }

// export default App;
