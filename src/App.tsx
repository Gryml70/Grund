import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Butik from './pages/Butik';
import Sida from './pages/Sida';
import Kontakt from './pages/Kontakt';
import User from './pages/User';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/butik" element={<Butik />} />
            <Route path="/sida" element={<Sida />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
