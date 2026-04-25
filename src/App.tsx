/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Users, 
  TrendingUp, 
  Star, 
  Target, 
  Zap, 
  Layout, 
  PieChart, 
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import React, { useState } from "react";

const COLORS = {
  primary: "#FF5722", // Vibrant Orange
  secondary: "#0F172A", // Deep Slate
  accent: "#F97316", // Bright Orange
  muted: "#94A3B8", // Blue Gray
};

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contato! Nossa equipe entrará em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-orange-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">2b</span>
              </div>
              <span className="font-bold text-2xl tracking-tighter text-slate-900">2biz<span className="text-orange-600">Company</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#metodo" className="hover:text-orange-600 transition-colors">Método FOME</a>
              <a href="#servicos" className="hover:text-orange-600 transition-colors">Serviços</a>
              <a href="#contato" className="bg-orange-600 text-white px-6 py-2.5 rounded-full hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
                Quero vender mais
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-orange-700" />
                Maior assessoria de marketing gastronômico do país
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Fazemos seu restaurante <span className="text-orange-600 block italic">bater recorde de vendas</span> através do marketing.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Implemente as estratégias validadas pela maior autoridade em marketing para gastronomia. Transformamos visitantes em clientes fiéis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contato" 
                  className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all group"
                >
                  SAIBA MAIS 
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </a>
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="User" 
                      className="w-12 h-12 rounded-full border-4 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="pl-6">
                    <p className="text-sm font-bold text-slate-900">+300 Restaurantes</p>
                    <p className="text-xs text-slate-500">Confiam no nosso método</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                  alt="Delicious Dish" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">+45%</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Crescimento Médio</p>
                </div>
              </motion.div>
              
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 italic">
            Faça parte das mais de 300 marcas que confiam na gente
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
             {/* Mock Logos */}
             <div className="text-2xl font-black italic">GURMÊ</div>
             <div className="text-2xl font-black tracking-tighter underline decoration-orange-600 underline-offset-4">BURGER.CO</div>
             <div className="text-2xl font-bold flex items-center gap-1"><span className="bg-slate-900 text-white p-1">THE</span>FOOD</div>
             <div className="text-2xl font-serif">Aroma</div>
             <div className="text-2xl font-black">PIZZA<span className="text-orange-600">HUBS</span></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Como a 2biz pode aumentar seu faturamento
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Conheça todos os serviços que oferecemos para que seu restaurante venda mais e se torne uma referência.
            </p>
            <a href="#contato" className="inline-flex items-center gap-2 text-orange-600 font-bold group">
              VER TODOS OS SERVIÇOS <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Tráfego Pago",
                desc: "Anúncios estratégicos no Instagram e Google para atrair novos clientes todos os dias."
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Gestão de Redes",
                desc: "Criação de conteúdo visual que desperta desejo e constrói uma comunidade apaixonada."
              },
              {
                icon: <PieChart className="w-8 h-8" />,
                title: "Análise de Dados",
                desc: "Decisões baseadas em métricas reais da sua operação para maximizar o ROI."
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-orange-100 transition-all border border-slate-100"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <button className="text-orange-600 font-bold flex items-center gap-2 group">
                  Saber mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Método FOME */}
      <section id="metodo" className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 opacity-10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-500 font-black text-6xl lg:text-9xl opacity-20 block mb-4">MÉTODO</span>
              <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Esse é o <span className="text-orange-500 italic">método de marketing</span> que utilizaremos.
              </h2>
            </div>
            <div className="lg:mb-6">
              <p className="text-slate-400 text-xl max-w-sm flex items-start gap-3">
                <Zap className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                Resultados consistentes através de uma estratégia validada em centenas de restaurantes.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { char: "F", name: "Fluxo", desc: "Fazer com que potenciais clientes conheçam o seu negócio e entrem no radar.", icon: <Users /> },
              { char: "O", name: "Originalidade", desc: "Gerar engajamento e desejo, fazendo com que se apaixonem pela sua marca.", icon: <Layout /> },
              { char: "M", name: "Monetização", desc: "Transformar seu público em vendas diretas e recorrentes.", icon: <TrendingUp /> },
              { char: "E", name: "Encantamento", desc: "Vender mais vezes para quem já comprou, aumentando o LTV.", icon: <Star /> }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-orange-600 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-[12rem] font-black text-white/5 group-hover:text-black/10 transition-colors">
                  {pillar.char}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 group-hover:bg-black/20 rounded-xl flex items-center justify-center mb-8 transition-colors">
                    {pillar.icon}
                  </div>
                  <h4 className="text-3xl font-black mb-4 tracking-tighter">{pillar.name}</h4>
                  <p className="text-slate-400 group-hover:text-white/90 transition-colors leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <div className="rounded-[3rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
                    alt="Success Restaurant" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-black text-slate-900">+300</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Atendidos</p>
                    </div>
                    <div className="h-12 w-px bg-slate-200" />
                    <div className="text-center">
                      <p className="text-4xl font-black text-slate-900">R$ 50M+</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Em Vendas</p>
                    </div>
                  </div>
                </div>
             </div>
             
             <div>
               <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-12 tracking-tight">
                 Por que a 2biz é a assessoria escolhida pelas grandes marcas?
               </h2>
               
               <div className="space-y-8">
                 {[
                   { title: "Foco em Vendas", text: "Somos movidos por resultados reais. Não buscamos apenas curtidas, buscamos pedidos no balcão e no delivery." },
                   { title: "Método Validado", text: "Criamos e aplicamos o Método FOME, usando estratégias testadas em centenas de restaurantes diferentes." },
                   { title: "Especialistas 100%", text: "Somos focados exclusivamente em gastronomia. Entendemos a dor da cozinha, do estoque e do atendimento." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                     <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                       <CheckCircle2 className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                       <p className="text-slate-600 leading-relaxed">{item.text}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Form Section */}
      <section id="contato" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-600 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-2xl shadow-orange-300">
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
             </div>
             
             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="text-white">
                  <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                    Quer vender mais? Cadastre-se agora.
                  </h2>
                  <p className="text-xl text-orange-100 mb-12 leading-relaxed">
                    Chegou o momento de decidir! Se você quer ter um marketing profissional para alavancar suas vendas, basta preencher o formulário que nosso time entrará em contato.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center blur-xs absolute animate-pulse" />
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center relative">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <span className="font-bold">Consultoria gratuita personalizada</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Seu Nome</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                        placeholder="Como podemos te chamar?"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">E-mail</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                        placeholder="melhor@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Nome do Restaurante</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                        placeholder="Qual a sua marca?"
                        value={formData.restaurant}
                        onChange={(e) => setFormData({...formData, restaurant: e.target.value})}
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-slate-900 text-white font-black py-5 rounded-xl hover:bg-slate-800 transition-all text-lg shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                      QUERO CRESCER MEU RESTAURANTE
                    </button>
                    <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                      Ao clicar você aceita nossos termos de uso e política de privacidade.
                    </p>
                  </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-sm">2b</span>
                </div>
                <span className="font-bold text-xl tracking-tighter text-slate-900">2biz<span className="text-orange-600">Company</span></span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm">
                A maior assessoria de marketing gastronômico do Brasil. 
                Focada em resultados reais e crescimento sustentável.
              </p>
            </div>
            
            <div className="flex gap-8 text-sm font-bold text-slate-500">
              <a href="#" className="hover:text-orange-600 transition-colors">POLÍTICA DE PRIVACIDADE</a>
              <a href="#" className="hover:text-orange-600 transition-colors">TERMOS DE USO</a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <p>© 2026 2BIZ COMPANY. TODOS OS DIREITOS RESERVADOS.</p>
            <p>CNPJ: 34.480.303/0001-70</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
