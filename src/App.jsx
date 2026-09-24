import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

// Componente para proteger a rota do painel
function RotaProtegida({ children }) {
  const token = sessionStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <RotaProtegida>
            <AdminPanel />
          </RotaProtegida>
        } />
      </Routes>
    </Router>
  );
}