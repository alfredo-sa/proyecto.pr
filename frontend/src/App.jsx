import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Routes>
      {/* Sin Layout — pantallas de entrada */}
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />

      {/* Con Layout — pantallas principales */}
      <Route path="/home" element={<Layout><Home /></Layout>} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
    </Routes>
  );
}

export default App;