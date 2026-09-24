import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { LogOut, LayoutList, ShieldCheck } from 'lucide-react';

export default function AdminPanel() {
  const [cotacoes, setCotacoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarCotacoes();
  }, []);

  const buscarCotacoes = async () => {
    try {
      const response = await api.get('/cotacoes');
      setCotacoes(response.data);
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 401) {
        sessionStorage.removeItem('token');
        navigate('/login');
      }
    }
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-950 text-white font-sans p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header do Painel */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 bg-zinc-800/80 border border-zinc-700 p-6 rounded-2xl backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="p-3 bg-protcar-yellow/10 rounded-xl text-protcar-yellow border border-protcar-yellow/20">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">Leads <span className="text-protcar-yellow">Recebidos</span></h1>
              <p className="text-zinc-400 text-sm font-medium">Gestão de cotações solicitadas pelo site</p>
            </div>
          </div>
          
          <button 
            onClick={logout} 
            className="flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-6 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all"
          >
            <LogOut size={18} /> Sair do Sistema
          </button>
        </header>

        {/* Tabela de Leads */}
        <div className="bg-zinc-900/60 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-800/80 border-b border-zinc-700">
                  <th className="p-5 font-bold text-zinc-300 uppercase text-xs tracking-wider whitespace-nowrap">Data</th>
                  <th className="p-5 font-bold text-zinc-300 uppercase text-xs tracking-wider">Cliente</th>
                  <th className="p-5 font-bold text-zinc-300 uppercase text-xs tracking-wider">Veículo</th>
                  <th className="p-5 font-bold text-zinc-300 uppercase text-xs tracking-wider">Placa</th>
                  <th className="p-5 font-bold text-zinc-300 uppercase text-xs tracking-wider">Contato</th>
                  <th className="p-5 font-bold text-zinc-300 uppercase text-xs tracking-wider">Localidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {cotacoes.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-12 text-center text-zinc-500 font-medium">
                      <div className="flex flex-col items-center gap-3">
                        <LayoutList size={48} className="opacity-30" />
                        <p>Nenhuma cotação recebida ainda.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  cotacoes.map((c) => (
                    <tr key={c.id} className="hover:bg-zinc-800/50 transition-colors">
                      <td className="p-5 text-zinc-400 text-sm whitespace-nowrap">{new Date(c.dataCriacao).toLocaleDateString('pt-BR')}</td>
                      <td className="p-5 font-bold text-zinc-100">{c.nomeCompleto}</td>
                      <td className="p-5 text-zinc-300 font-medium">{c.marca} {c.modelo} <span className="text-zinc-500 text-sm">({c.anoFabricacao})</span></td>
                      <td className="p-5"><span className="bg-zinc-950 border border-zinc-700 px-3 py-1 rounded text-sm font-mono text-protcar-yellow uppercase tracking-widest">{c.placa}</span></td>
                      <td className="p-5">
                        <a href={`https://wa.me/55${c.telefone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 font-bold hover:underline">
                          {c.telefone}
                        </a>
                      </td>
                      <td className="p-5 text-zinc-400 text-sm">{c.cidade} - <span className="uppercase">{c.estado}</span></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
}