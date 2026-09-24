import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { username, password });
      sessionStorage.setItem('token', response.data.token);
      navigate('/admin');
    } catch (error) {
      alert("Credenciais inválidas! Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 font-sans text-white">
      <div className="w-full max-w-md bg-zinc-800/80 backdrop-blur-xl border border-zinc-700 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-protcar-yellow via-yellow-400 to-protcar-yellow"></div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <ShieldCheck size={48} className="text-protcar-yellow drop-shadow-md" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white">Painel <span className="text-protcar-yellow">PROTCAR</span></h2>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Acesso restrito para colaboradores</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-bold text-zinc-400 mb-2">Usuário</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-400 mb-2">Senha</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" 
              required 
            />
          </div>
          
          <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-protcar-yellow text-zinc-900 font-black text-lg py-4 rounded-xl mt-4 hover:bg-yellow-400 transition-all flex justify-center items-center gap-2 shadow-lg hover:-translate-y-1"
          >
            {loading ? 'Entrando...' : 'Acessar Sistema'} <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}