import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Shield, Clock, Zap, Brain, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('/banner_vendas.png')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Multiplique Sua Produtividade por 10x com Inteligência Artificial
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Domine as ferramentas de IA e economize 5+ horas por semana (mesmo sem conhecimento técnico)
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all"
              onClick={() => window.location.href = 'https://go.hotmart.com/P102734279T'}
            >
              QUERO TRANSFORMAR MINHA PRODUTIVIDADE →
            </Button>
            <p className="mt-4 text-sm text-blue-200">✅ Acesso imediato | ✅ Garantia de 7 dias</p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Você já se sentiu assim?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, text: "O dia precisava ter mais de 24 horas para dar conta de tudo?" },
              { icon: TrendingUp, text: "A lista de tarefas nunca diminui, não importa o quanto você trabalhe?" },
              { icon: Brain, text: "Passa horas em tarefas repetitivas que poderiam ser automatizadas?" }
            ].map((pain, i) => (
              <Card key={i} className="p-6 border-2 border-red-200 bg-red-50">
                <pain.icon className="w-12 h-12 text-red-600 mb-4" />
                <p className="text-gray-700 font-medium">❌ {pain.text}</p>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-gray-600">
            Se você respondeu <strong>SIM</strong> para alguma dessas perguntas, continue lendo...
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/capa_ebook.png" 
                alt="Capa do E-book Produtividade 10x com IA" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Apresento: <span className="text-blue-600">Produtividade 10x com IA</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Um guia prático e direto ao ponto para transformar a Inteligência Artificial no seu superpoder pessoal.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Este e-book foi criado especialmente para <strong>profissionais, freelancers e empreendedores</strong> que desejam multiplicar sua produtividade sem precisar de conhecimento técnico avançado.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                onClick={() => window.location.href = 'https://go.hotmart.com/P102734279T'}
              >
                GARANTIR MEU ACESSO AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            O Que Você Vai Aprender
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Capítulo 1: A Revolução da IA", desc: "Entenda o que é IA Generativa e por que ela representa uma mudança de paradigma no trabalho" },
              { title: "Capítulo 2: As Ferramentas Essenciais", desc: "Domine ChatGPT, Notion AI, Perplexity e ferramentas de imagem para cobrir 80% das suas necessidades" },
              { title: "Capítulo 3: A Arte do Prompt Perfeito", desc: "Aprenda o framework P-T-C-F para criar instruções que geram resultados de alta qualidade" },
              { title: "Capítulo 4: IA em Ação", desc: "Exemplos práticos para gerenciar e-mails, criar conteúdo, otimizar reuniões e acelerar pesquisas" },
              { title: "Capítulo 5: Nível Avançado", desc: "Construa seu Segundo Cérebro e crie automações inteligentes com Zapier" },
              { title: "Bônus Exclusivos", desc: "15 prompts prontos + Template de produtividade para Notion + Guia de automações" }
            ].map((benefit, i) => (
              <Card key={i} className="p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            🎁 Bônus Exclusivos (Valor: R$ 147)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "15 Prompts Prontos", value: "R$ 47", desc: "Templates de prompts para ChatGPT cobrindo as tarefas mais comuns do dia a dia" },
              { title: "Template Notion", value: "R$ 67", desc: "Sistema de produtividade com IA integrada para gerenciar tarefas de forma inteligente" },
              { title: "Guia de Automações", value: "R$ 33", desc: "Como criar fluxos automatizados com Zapier + IA para trabalhar no piloto automático" }
            ].map((bonus, i) => (
              <Card key={i} className="p-6 bg-white border-2 border-yellow-400">
                <div className="text-center">
                  <div className="inline-block bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full mb-4">
                    {bonus.value}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{bonus.title}</h3>
                  <p className="text-gray-600">{bonus.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            O Que Estão Dizendo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Carlos M.", role: "Gestor de Projetos", text: "Economizei 8 horas por semana só aplicando os prompts do capítulo 3. Incrível!" },
              { name: "Ana P.", role: "Freelancer", text: "Finalmente entendi como usar IA de forma prática. Minha produtividade triplicou." },
              { name: "Roberto S.", role: "Empreendedor", text: "O template de Notion mudou minha vida. Agora tenho controle total das minhas tarefas." }
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container max-w-4xl text-center">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Se por qualquer motivo você não ficar satisfeito com o conteúdo, basta enviar um e-mail e devolverei <strong>100% do seu investimento</strong>.
          </p>
          <p className="text-xl font-bold text-green-700">
            Sem perguntas. Sem burocracia. O risco é todo meu.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cta-section" className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Quanto Custa Transformar Sua Produtividade?
          </h2>
          <Card className="p-8 bg-white text-gray-800 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">VALOR TOTAL DO PACOTE:</div>
                <div className="space-y-1 text-gray-600">
                  <div>E-book Produtividade 10x com IA: <span className="line-through">R$ 97</span></div>
                  <div>Bônus #1 - 15 Prompts Prontos: <span className="line-through">R$ 47</span></div>
                  <div>Bônus #2 - Template Notion: <span className="line-through">R$ 67</span></div>
                  <div>Bônus #3 - Guia de Automações: <span className="line-through">R$ 33</span></div>
                  <div className="border-t-2 border-gray-300 pt-2 mt-2 font-bold text-lg">
                    TOTAL: <span className="line-through">R$ 244</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-100 p-6 rounded-lg mb-6">
                <div className="text-sm text-gray-600 mb-2">Mas hoje você investe apenas:</div>
                <div className="text-5xl font-bold text-blue-600 mb-2">R$ 37</div>
                <div className="text-gray-600">ou 12x de R$ 3,67 sem juros</div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-6 mb-4"
                onClick={() => window.location.href = 'https://go.hotmart.com/P102734279T'}
              >
                <Zap className="mr-2" />
                SIM, QUERO COMEÇAR AGORA!
              </Button>
              
              <p className="text-sm text-gray-500">
                ⚠️ Oferta especial de lançamento - Pode encerrar a qualquer momento
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              { q: "Para quem é este e-book?", a: "Para qualquer pessoa que deseja aumentar sua produtividade usando IA, desde profissionais até empreendedores. Não é necessário conhecimento técnico." },
              { q: "Preciso de conhecimento prévio em IA?", a: "Não! O conteúdo foi criado para iniciantes completos. Tudo é explicado de forma simples e prática." },
              { q: "Como recebo o produto?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o acesso ao e-book e todos os bônus." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Basta pedir o reembolso e devolverei 100% do valor." },
              { q: "Funciona em qual dispositivo?", a: "O e-book é em formato PDF e pode ser lido em qualquer dispositivo: computador, tablet ou celular." }
            ].map((faq, i) => (
              <Card key={i} className="p-6 cursor-pointer hover:shadow-md transition-shadow" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-gray-800">{faq.q}</h3>
                  <span className="text-2xl text-blue-600">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && (
                  <p className="mt-4 text-gray-600">{faq.a}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seu Futuro Mais Produtivo Começa Agora
          </h2>
          <p className="text-xl mb-8">
            Não deixe para depois. Cada dia que passa é tempo perdido que você poderia estar economizando com IA.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://go.hotmart.com/P102734279T'}
          >
            GARANTIR MEU ACESSO POR R$ 37
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="container">
          <p>© 2025 Produtividade 10x com IA. Todos os direitos reservados.</p>
          <p className="mt-2">Este produto não garante resultados específicos. Os resultados podem variar.</p>
        </div>
      </footer>
    </div>
  );
}
