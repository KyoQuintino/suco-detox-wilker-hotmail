import { useEffect } from "react";
import { ArrowLeft, Check, Leaf, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Payment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    script.async = true;
    document.head.appendChild(script);

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
    document.head.appendChild(stylesheet);

    return () => {
      script.remove();
      stylesheet.remove();
    };
  }, []);

  return (
    <main className="payment-page">
      <header className="payment-header">
        <Link href="/" className="brand payment-brand">
          <span className="brand-mark"><Leaf size={18} strokeWidth={2.5} /></span>
          <span><strong>10 Sucos</strong><small>DETox · rotina leve</small></span>
        </Link>
        <div className="payment-secure"><ShieldCheck size={15} /> checkout seguro Hotmart</div>
      </header>

      <section className="payment-wrap">
        <div className="payment-back"><Link href="/"><ArrowLeft size={16} /> voltar para a página do guia</Link></div>
        <div className="payment-grid">
          <div className="payment-summary">
            <div className="payment-kicker">quase lá</div>
            <h1>Seu ritual de<br /><em>mais leveza</em> começa agora.</h1>
            <p>Você está a um passo de receber o guia digital com 10 receitas de sucos detox para deixar a sua rotina mais fresca, nutritiva e possível.</p>
            <div className="summary-card">
              <div className="summary-cover"><img src="/manus-storage/ebook-cover_0b939e82.png" alt="Capa do e-book 10 Sucos Detox" /></div>
              <div><strong>10 Sucos Detox</strong><span>e-book digital em PDF</span><b>R$ 19,90</b></div>
            </div>
            <div className="summary-points"><div><Check size={15} /> acesso digital após a confirmação</div><div><Check size={15} /> leia no celular, tablet ou computador</div><div><Check size={15} /> pagamento processado pela Hotmart</div></div>
          </div>

          <div className="hotmart-box">
            <div className="hotmart-box-head"><span>finalize sua compra</span><ShieldCheck size={19} /></div>
            <h2>Garanta seu acesso</h2>
            <p>Ao clicar no botão abaixo, você será direcionado para o checkout oficial da Hotmart.</p>
            <a onClick={() => false} href="https://pay.hotmart.com/F107560667W?checkoutMode=2" className="hotmart-fb hotmart__button-checkout hotmart-buy-button">
              <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Comprar agora pela Hotmart" />
            </a>
            <a className="manual-checkout" href="https://pay.hotmart.com/F107560667W?checkoutMode=2">Se o botão não abrir, clique aqui para continuar</a>
            <div className="hotmart-note"><ShieldCheck size={14} /> ambiente protegido e pagamento seguro</div>
          </div>
        </div>
      </section>
      <footer className="payment-footer">© 2026 · 10 Sucos Detox · Material digital para fins informativos.</footer>
    </main>
  );
}
