import { useState } from 'react';
import { api } from '../services/api';
import { 
  ShieldCheck, MessageCircle, ArrowRight, 
  Headset, Navigation, Car, Users, 
  Truck, ShieldAlert, CheckCircle2, Check, X
} from 'lucide-react';

export default function LandingPage() {
  const numeroWhatsApp = "5511999999999"; 
  
  const [formData, setFormData] = useState({
    placa: '', marca: '', modelo: '', anoFabricacao: '', 
    nomeCompleto: '', email: '', telefone: '', estado: '', cidade: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/cotacoes', formData);
      setShowSuccess(true); 
      setFormData({placa: '', marca: '', modelo: '', anoFabricacao: '', nomeCompleto: '', email: '', telefone: '', estado: '', cidade: ''});
    } catch (error) {
      alert("Ocorreu um erro ao enviar sua cotação. Verifique os dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const beneficios = [
    { icon: <Headset size={36} />, titulo: "Assistência 24 horas", descricao: "Acione assistência em qualquer hora do dia em todo território nacional." },
    { icon: <ShieldAlert size={36} />, titulo: "Coberturas personalizadas", descricao: "Na Protcar, você está seguro contra furto, roubo, batidas, panes e muito mais." },
    { icon: <Users size={36} />, titulo: "Danos a terceiros", descricao: "Se proteja com nossa cobertura de danos a terceiros e evite imprevistos." },
    { icon: <Car size={36} />, titulo: "Carro reserva", descricao: "Caso seu veículo precise de reparos, mantenha sua rotina com um carro reserva." },
    { icon: <Navigation size={36} />, titulo: "Rastreamento", descricao: "Tenha o controle e saiba exatamente onde o seu veículo está a qualquer momento." },
    { icon: <Truck size={36} />, titulo: "Reboque 24 horas", descricao: "Imprevistos acontecem. Nosso reboque está sempre pronto para te buscar onde você estiver." }
  ];

  const vantagensHero = [
    "Cotação 100% Personalizada",
    "Pagamento mensal facilitado",
    "Preço que se adapta a sua realidade",
    "Proteção sem burocracia"
  ];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-protcar-yellow selection:text-zinc-900 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950">
      
      {/* Popup de Sucesso */}
      {showSuccess && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-3xl max-w-md w-full text-center relative shadow-2xl animate-fade-in">
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
              <X size={24} />
            </button>
            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-3xl font-black mb-3">Cotação Recebida!</h3>
            <p className="text-zinc-300 font-medium mb-8">
              Nossa equipe já está analisando o seu perfil. Entraremos em contato pelo WhatsApp com a melhor proposta.
            </p>
            <button onClick={() => setShowSuccess(false)} className="w-full bg-protcar-yellow text-zinc-900 font-black py-4 rounded-xl hover:bg-yellow-400 transition-colors">
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Header Fixo */}
      <header className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter text-protcar-yellow drop-shadow-md">PROTCAR</h1>
          <a href="#cotacao" className="hidden md:flex items-center gap-2 bg-protcar-yellow text-zinc-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-transform hover:scale-105">
            Cotar Agora <ArrowRight size={18} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[70%] bg-protcar-yellow/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center space-y-6">
          
          <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Proteção automotiva 
            </span>
            <br />
            <span className="text-protcar-yellow drop-shadow-[0_0_15px_rgba(255,200,0,0.15)]">do seu jeito.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
            Quem escolhe proteger seu veículo, escolhe viver com mais leveza. Tenha uma cobertura completa com o melhor custo-benefício.
          </p>

          <ul className="flex flex-wrap justify-center gap-3 pt-2">
            {vantagensHero.map((vantagem, index) => (
              <li key={index} className="flex items-center gap-2 text-zinc-200 font-semibold bg-zinc-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-700">
                <span className="text-protcar-yellow">
                  <Check size={16} strokeWidth={4} />
                </span>
                {vantagem}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-6 w-full justify-center">
            <a href="#cotacao" className="flex items-center justify-center gap-2 bg-protcar-yellow text-zinc-900 font-extrabold py-4 px-10 rounded-xl hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:-translate-y-1">
              <ShieldCheck size={24} />
              Solicitar Cotação
            </a>
            <a href={`https://wa.me/${numeroWhatsApp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white text-zinc-900 font-extrabold py-4 px-10 rounded-xl hover:bg-zinc-200 transition-all hover:-translate-y-1">
              <MessageCircle size={24} className="text-green-600" />
              Falar com Atendente
            </a>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-24 px-6 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight">
            Como proteger seu veículo em <span className="text-protcar-yellow">3 passos</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", titulo: "Faça sua Cotação", desc: "Preencha o formulário abaixo em menos de 1 minuto." },
              { num: "2", titulo: "Aguarde o Contato", desc: "Nossa equipe analisará seu perfil e entrará em contato." },
              { num: "3", titulo: "Veículo Protegido", desc: "Feche o acordo e saia dirigindo com total tranquilidade." }
            ].map((passo, index) => (
              <div key={index} className="flex flex-col items-center p-8 rounded-3xl bg-zinc-800/40 backdrop-blur-md border border-zinc-700 hover:border-protcar-yellow/50 transition-all hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-gradient-to-br from-protcar-yellow to-yellow-600 text-zinc-900 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform rotate-3">
                  {passo.num}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{passo.titulo}</h3>
                <p className="font-medium text-zinc-400 leading-relaxed">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-24 px-6 bg-gradient-to-t from-zinc-900 via-zinc-950 to-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">A cobertura que <span className="text-protcar-yellow">você precisa.</span></h2>
            <p className="text-zinc-400 text-lg font-medium">Benefícios exclusivos para garantir a segurança que o seu veículo merece.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((item, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col items-start gap-4 hover:border-protcar-yellow/50 hover:shadow-lg transition-all group">
                <div className="text-protcar-yellow bg-protcar-yellow/10 p-4 rounded-2xl group-hover:bg-protcar-yellow group-hover:text-zinc-900 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl text-white tracking-tight">{item.titulo}</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Cotação */}
      <section id="cotacao" className="py-24 px-6 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 relative border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800/80 backdrop-blur-xl border border-zinc-700 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-protcar-yellow via-yellow-400 to-protcar-yellow"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Pronto para ter <span className="text-protcar-yellow">tranquilidade?</span></h2>
              <p className="text-zinc-300 font-medium">Preencha os dados abaixo e entraremos em contato.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-zinc-300 mb-2">Nome Completo</label>
                <input required type="text" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2">E-mail</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2">Telefone (WhatsApp)</label>
                <input required type="tel" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">Placa</label>
                  <input required type="text" name="placa" value={formData.placa} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white uppercase focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">Ano</label>
                  <input required type="number" name="anoFabricacao" value={formData.anoFabricacao} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">Marca</label>
                  <input required type="text" name="marca" value={formData.marca} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">Modelo</label>
                  <input required type="text" name="modelo" value={formData.modelo} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2">Cidade</label>
                <input required type="text" name="cidade" value={formData.cidade} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2">Estado (UF)</label>
                <input required type="text" name="estado" maxLength="2" value={formData.estado} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-700 p-4 rounded-xl text-white uppercase focus:outline-none focus:border-protcar-yellow focus:ring-1 focus:ring-protcar-yellow transition-all" />
              </div>
              
              <button disabled={loading} type="submit" className="md:col-span-2 mt-8 bg-protcar-yellow text-zinc-900 font-black text-xl py-5 rounded-xl hover:bg-yellow-400 transition-all flex justify-center items-center gap-3 shadow-[0_5px_20px_rgba(255,200,0,0.2)] hover:scale-[1.02]">
                {loading ? 'Processando...' : 'Enviar Solicitação'} <ArrowRight size={24} />
              </button>

              <div className="md:col-span-2 flex items-center justify-center gap-2 mt-4 text-sm font-medium text-zinc-400">
                <CheckCircle2 size={18} className="text-green-500" />
                Seus dados estão seguros. Cotação 100% sem compromisso.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900 text-zinc-400 text-sm font-medium">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div className="space-y-1">
            <p>CNPJ PROTCAR: 50.180.527/0001-13</p>
            <p>FIP SUSEP: 01546</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="hidden md:block w-px h-12 bg-zinc-800"></div>
            
            <div className="flex items-center gap-4">
              <div className="text-3xl font-black italic text-protcar-yellow opacity-90">
                PROTCAR
              </div>
              <div className="space-y-1 text-left">
                <p className="text-white font-bold">Endereço Matriz Protcar</p>
                <p>Av. Afonso Pena, nº 1000 - Centro</p>
                <p>Belo Horizonte/MG 30130-002</p>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}