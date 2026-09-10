import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Leaf,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const checkoutAnchor = "#oferta";

const recipes = [
  { number: "01", name: "Power Rejuvenescedor", note: "Clorofila + frescor" },
  { number: "02", name: "Combate ao Inchaço", note: "Leveza no dia a dia" },
  { number: "03", name: "Contra a Indigestão", note: "Ingredientes simples" },
  { number: "04", name: "Super Detox", note: "Rotina renovada" },
  { number: "05", name: "Detox de Frutas", note: "Doce na medida" },
  { number: "06", name: "Chô Gordura", note: "Sabor marcante" },
  { number: "07", name: "Chô Gordura II", note: "Outra combinação" },
  { number: "08", name: "Detox Power", note: "Para começar" },
  { number: "09", name: "Chô TPM", note: "Cuidado para você" },
  { number: "10", name: "Verde Fit + Power 220v", note: "Energia e variedade" },
];

const faqs = [
  {
    question: "É um plano alimentar completo?",
    answer:
      "Não. O e-book é um guia de receitas e hábitos para complementar uma rotina equilibrada. Ele não substitui acompanhamento médico ou nutricional individual.",
  },
  {
    question: "Preciso de ingredientes difíceis de encontrar?",
    answer:
      "A proposta é prática: as receitas foram organizadas para você preparar seus sucos com ingredientes naturais e fáceis de adaptar à sua realidade.",
  },
  {
    question: "Posso tomar os sucos todos os dias?",
    answer:
      "A frequência ideal depende da sua rotina, alimentação e necessidades. Use as orientações do material como ponto de partida e, se tiver alguma condição de saúde, converse com um profissional.",
  },
  {
    question: "Como recebo o e-book?",
    answer:
      "Após a confirmação da compra, a entrega é feita digitalmente pela Hotmart, no e-mail informado durante o checkout.",
  },
];

function scrollToOffer() {
  document.querySelector(checkoutAnchor)?.scrollIntoView({ behavior: "smooth" });
}

function goToPayment() {
  window.location.href = "/pagamento";
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark"><Leaf size={18} strokeWidth={2.5} /></span>
            <span><strong>10 Sucos</strong><small>DETox · rotina leve</small></span>
          </a>
          <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            <a href="#o-metodo" onClick={closeMenu}>O guia</a>
            <a href="#receitas" onClick={closeMenu}>Receitas</a>
            <a href="#autora" onClick={closeMenu}>A autora</a>
            <button className="nav-cta" onClick={() => { closeMenu(); scrollToOffer(); }}>Quero o e-book <ArrowRight size={15} /></button>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow light"><span className="eyebrow-dot" /> seu ritual de bem-estar começa aqui</div>
            <h1>Mais sabor.<br /><em>Mais leveza.</em><br />Mais você.</h1>
            <p className="hero-lead">Um guia prático com 10 receitas de sucos detox para deixar sua rotina mais fresca, nutritiva e possível.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={scrollToOffer}>Quero começar agora <ArrowRight size={18} /></button>
              <a className="text-link light" href="#o-metodo">Descobrir o guia <span>↓</span></a>
            </div>
            <div className="hero-trust"><ShieldCheck size={16} /> acesso digital imediato pela Hotmart <span className="trust-line" /> <span>leitura simples e prática</span></div>
          </div>
          <div className="hero-side-note"><span>receitas que cabem<br />na sua rotina</span><span className="side-line" /><span className="side-index">01 / 04</span></div>
        </div>
        <div className="scroll-hint"><span /> role para explorar</div>
      </section>

      <section className="proof-strip">
        <div className="container proof-inner">
          <div className="proof-item"><span className="proof-icon"><BookOpen size={18} /></span><span><strong>10 receitas</strong><small>selecionadas para variar</small></span></div>
          <div className="proof-item"><span className="proof-icon"><Clock3 size={18} /></span><span><strong>Preparo descomplicado</strong><small>feito para a vida real</small></span></div>
          <div className="proof-item"><span className="proof-icon"><Zap size={18} /></span><span><strong>Entrega digital</strong><small>comece assim que comprar</small></span></div>
        </div>
      </section>

      <section className="intro-section section-pad" id="o-metodo">
        <div className="container two-col intro-grid">
          <div className="section-kicker">01 <span /> o ponto de partida</div>
          <div className="intro-text">
            <h2>Seu corpo não precisa de mais uma promessa impossível.</h2>
            <p className="large-copy">Precisa de escolhas que você consiga repetir. O <strong>10 Sucos Detox Exterminadores de Gordura</strong> reúne combinações refrescantes e orientações simples para transformar ingredientes naturais em um ritual de cuidado.</p>
            <p>Não é sobre viver de restrições. É sobre ter uma opção prática para os dias corridos, descobrir novos sabores e construir uma relação mais consciente com o que você coloca no copo.</p>
            <a className="arrow-link" href="#receitas">Ver o que você vai preparar <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Benefícios do guia">
        <div className="marquee-track"><span>ingredientes naturais</span><i>✦</i><span>preparo simples</span><i>✦</i><span>mais variedade</span><i>✦</i><span>ritual de bem-estar</span><i>✦</i><span>ingredientes naturais</span><i>✦</i><span>preparo simples</span></div>
      </section>

      <section className="recipes-section section-pad" id="receitas">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-kicker">02 <span /> por dentro do guia</div>
            <h2>10 combinações para<br /><em>despertar sua rotina.</em></h2>
            <p>Da clorofila ao toque cítrico, uma seleção para você sair do automático e encontrar o seu sabor favorito.</p>
          </div>
          <div className="recipe-layout">
            <div className="recipe-list">
              {recipes.map((recipe) => (
                <div className="recipe-row" key={recipe.number}>
                  <span className="recipe-number">{recipe.number}</span>
                  <span className="recipe-name">{recipe.name}</span>
                  <span className="recipe-note">{recipe.note}</span>
                  <Check size={17} />
                </div>
              ))}
            </div>
            <div className="recipe-visual">
              <img src="/manus-storage/detox-square_76b64920.jpg" alt="Mulher segurando um copo de suco verde em uma cozinha iluminada" />
              <div className="visual-caption"><span>feito para</span><strong>vida real</strong><small>sem complicação</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="author-section section-pad" id="autora">
        <div className="container author-grid">
          <div className="author-image-wrap"><img src="/manus-storage/ebook-cover_0b939e82.png" alt="Capa do e-book 10 Sucos Detox Exterminadores de Gordura" /></div>
          <div className="author-copy">
            <div className="section-kicker">03 <span /> quem criou</div>
            <h2>Conheça a visão por trás do guia.</h2>
            <p className="large-copy">O material foi desenvolvido por <strong>Rosi Feliciano</strong>, especialista em emagrecimento saudável e criadora de conteúdos para quem busca construir hábitos mais leves e sustentáveis.</p>
            <p>Com uma trajetória marcada por estudo, prática e transformação pessoal, Rosi traduz informação em passos que cabem na rotina — sem fórmulas mágicas e sem a culpa que costuma acompanhar as dietas.</p>
            <div className="author-sign">Rosi<br /><span>Feliciano</span></div>
          </div>
        </div>
      </section>

      <section className="offer-section section-pad" id="oferta">
        <div className="container offer-grid">
          <div className="offer-copy">
            <div className="section-kicker light">04 <span /> seu próximo passo</div>
            <h2>Um pequeno ritual pode mudar o tom do seu dia.</h2>
            <p>Tenha as receitas à mão, escolha seu momento e comece com uma combinação que faça sentido para você.</p>
            <div className="offer-points">
              <div><Check size={17} /><span>e-book digital em PDF</span></div>
              <div><Check size={17} /><span>10 receitas detox variadas</span></div>
              <div><Check size={17} /><span>acesso rápido pela Hotmart</span></div>
              <div><Check size={17} /><span>leitura no celular ou computador</span></div>
            </div>
          </div>
          <div className="price-card" id="checkout">
            <div className="price-card-top"><Sparkles size={18} /><span>acesso completo ao guia</span></div>
            <div className="price-label">por apenas</div>
            <div className="price"><small>R$</small> 19,90</div>
            <div className="price-sub">pagamento único · acesso digital</div>
            <button className="button button-orange" onClick={goToPayment}>Quero meu e-book <ArrowRight size={18} /></button>
            <div className="secure-note"><ShieldCheck size={15} /> compra processada com segurança pela Hotmart</div>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="container faq-grid">
          <div><div className="section-kicker">05 <span /> dúvidas frequentes</div><h2>Antes de começar,<br /><em>tire suas dúvidas.</em></h2><p className="faq-intro">Tudo para você comprar com clareza e usar o material com responsabilidade.</p></div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                <button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{faq.question}</span><ChevronDown size={19} /></button>
                <div className="faq-answer"><p>{faq.answer}</p></div>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-image" aria-hidden="true" />
        <div className="final-overlay" />
        <div className="container final-content"><div className="section-kicker light">seu ritual começa com uma escolha</div><h2>Abra espaço para<br /><em>mais leveza.</em></h2><button className="button button-primary" onClick={scrollToOffer}>Quero começar agora <ArrowRight size={18} /></button></div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark"><Leaf size={18} strokeWidth={2.5} /></span><span><strong>10 Sucos</strong><small>DETox · rotina leve</small></span></div><div className="footer-links"><a href="#o-metodo">O guia</a><a href="#receitas">Receitas</a><a href="#faq">Dúvidas</a></div><p>© 2026 · Material digital para fins informativos.</p></div></footer>
    </main>
  );
}
