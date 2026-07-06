import React, { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      // Scroll reveal
      const revealTargets = document.querySelectorAll(
        '.section-head, .pain-item, .benefit-card, .acc-item, .solution > div, .offer > div, .final-cta h2, .final-cta p, .final-cta .btn-primary, .stat'
      );
      revealTargets.forEach(el => el.classList.add('reveal'));
      
      function staggerGroup(groupSelector, itemSelector, stepMs) {
        const groups = document.querySelectorAll(groupSelector);
        groups.forEach(group => {
          const items = group.querySelectorAll(itemSelector);
          items.forEach((el, i) => {
            el.style.transitionDelay = (i * stepMs) + 'ms';
          });
        });
      }
      
      staggerGroup('.pain-grid', '.pain-item', 55);
      staggerGroup('.benefits', '.benefit-card', 65);
      staggerGroup('.acc', '.acc-item', 45);
      staggerGroup('.stats-inner', '.stat', 60);
      
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('reveal-visible', entry.isIntersecting);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
      
      revealTargets.forEach(el => revealObserver.observe(el));

      // Accordion
      const accItems = document.querySelectorAll('.acc-item');
      accItems.forEach(item => {
        const q = item.querySelector('.acc-q');
        const a = item.querySelector('.acc-a');
        if (q && a) {
          q.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            const openItems = document.querySelectorAll('.acc-item.open');
            openItems.forEach(o => {
              o.classList.remove('open');
              const oAnswer = o.querySelector('.acc-a');
              if (oAnswer) oAnswer.style.maxHeight = null;
            });
            if (!isOpen) {
              item.classList.add('open');
              a.style.maxHeight = a.scrollHeight + 'px';
            }
          });
        }
      });
    } catch (error) {
      console.error('Error initializing effects:', error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>PAULO SAT — Sinal de volta, sem complicação</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Instalação, mudança de endereço e apontamento de SKY, OI e Claro TV. Técnico certificado no Sul Fluminense - RJ" />
      </Head>

      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M6 24C6 15 12 9 21 9" stroke="#0F3B63" strokeWidth="2.4" strokeLinecap="round"/>
              <path d="M10 24C10 18 14 14 20 14" stroke="#2E6FA8" strokeWidth="2.4" strokeLinecap="round"/>
              <circle cx="24" cy="8" r="3" fill="#E8B93C"/>
            </svg>
            PAULO SAT
          </div>
          <div className="nav-links">
            <a href="#solucao">Serviços</a>
            <a href="#beneficios">Diferenciais</a>
            <a href="#duvidas">Dúvidas</a>
          </div>
          <a className="nav-cta" href="https://wa.me/5524981151736?text=Ol%C3%A1!%20Estou%20sem%20sinal%20na%20TV%20e%20preciso%20de%20ajuda." target="_blank" rel="noopener">
            Chamar no WhatsApp
          </a>
        </div>
      </nav>

      <header className="hero">
        <svg className="signal-rings" viewBox="0 0 640 640">
          <circle cx="480" cy="160" r="80"/>
          <circle cx="480" cy="160" r="150"/>
          <circle cx="480" cy="160" r="220"/>
        </svg>
        <div className="wrap hero-inner">
          <div>
            <span className="eyebrow"><span className="dot"></span>Sul Fluminense — RJ</span>
            <h1>Sem sinal na TV? <span className="accent">Resolvemos hoje.</span></h1>
            <p className="hero-sub">Instalação, mudança de endereço e apontamento de SKY, OI e Claro TV. Técnico certificado, atendimento rápido, direto na sua casa ou comércio.</p>
            <div className="hero-ctas">
              <a className="btn-primary" href="https://wa.me/5524981151736?text=Ol%C3%A1!%20Estou%20sem%20sinal%20na%20TV%20e%20preciso%20de%20ajuda." target="_blank" rel="noopener">
                Chamar no WhatsApp
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#13233A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a className="btn-ghost" href="#solucao">Ver serviços</a>
            </div>
            <p className="hero-note">Atendimento rápido • Aceita cartão • Orçamento sem compromisso</p>
          </div>
          <div className="dish-card">
            <img className="dish-photo" src="/assets/tecnico-instalando-antena-cutout.png" alt="Técnico instalando antena no telhado" />
          </div>
        </div>
      </header>

      <div className="stats">
        <div className="wrap stats-inner">
          <div className="stat">
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" stroke="#0F3B63" strokeWidth="2"/>
                <circle cx="12" cy="10" r="2.5" stroke="#0F3B63" strokeWidth="2"/>
              </svg>
            </div>
            <b>Sul Fluminense</b><span>região de atendimento</span>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0F3B63" strokeWidth="2"/>
                <path d="M2 10h20" stroke="#0F3B63" strokeWidth="2"/>
              </svg>
            </div>
            <b>SKY · OI · Claro</b><span>sistemas atendidos</span>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#0F3B63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="#0F3B63" strokeWidth="2"/>
              </svg>
            </div>
            <b>Técnico certificado</b><span>direto na sua casa</span>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="13" rx="2" stroke="#0F3B63" strokeWidth="2"/>
                <path d="M3 10h18" stroke="#0F3B63" strokeWidth="2"/>
              </svg>
            </div>
            <b>Cartão aceito</b><span>pagamento facilitado</span>
          </div>
        </div>
      </div>

      <section id="dor">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Reconhece a situação?</span>
            <h2>TV sem sinal é sempre na pior hora</h2>
            <p>Jogo importante, novela, criança querendo desenho — e a tela travada ou preta. Muita gente tenta resolver sozinha ou contrata alguém sem experiência, e o problema volta em uma semana.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C79420" strokeWidth="2"/>
                <path d="M12 8v5M12 16h.01" stroke="#C79420" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              TV mostrando "sem sinal" há dias e ninguém resolve
            </div>
            <div className="pain-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C79420" strokeWidth="2"/>
                <path d="M12 8v5M12 16h.01" stroke="#C79420" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Mudou de casa e esqueceu de reinstalar a antena
            </div>
            <div className="pain-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C79420" strokeWidth="2"/>
                <path d="M12 8v5M12 16h.01" stroke="#C79420" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              SKY ou OI travando toda hora, mesmo pagando em dia
            </div>
            <div className="pain-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C79420" strokeWidth="2"/>
                <path d="M12 8v5M12 16h.01" stroke="#C79420" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Claro TV fora do ar sem explicação
            </div>
            <div className="pain-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C79420" strokeWidth="2"/>
                <path d="M12 8v5M12 16h.01" stroke="#C79420" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Contratou alguém que não entendia do assunto
            </div>
            <div className="pain-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C79420" strokeWidth="2"/>
                <path d="M12 8v5M12 16h.01" stroke="#C79420" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Perdeu tempo tentando mexer sozinho e não adiantou
            </div>
          </div>
        </div>
      </section>

      <section id="solucao">
        <div className="solution">
          <div>
            <span className="kicker" style={{color:'#F5D98A'}}>A solução</span>
            <h2>Resolvido do jeito certo, na primeira visita</h2>
            <p>O PAULO SAT trabalha com instalação, mudança de endereço da antena, apontamento fino de SKY, OI e Claro TV, e configuração de receptores Century, Vivensys e SKY.</p>
            <p>O diferencial é simples: técnico certificado, atendimento rápido e resolução completa — sem enrolação, sem terceirizar pra outra pessoa.</p>
            <div className="solution-tags">
              <span className="tag">Instalação</span>
              <span className="tag">Mudança de endereço</span>
              <span className="tag">Apontamento SKY/OI/Claro</span>
              <span className="tag">Receptores Century, Vivensys, SKY</span>
            </div>
          </div>
          <img src="/assets/sky-dish-cutout.png" alt="Antena parabólica SKY" style={{width:'100%', maxWidth:360, height:'auto', justifySelf:'center', filter:'drop-shadow(0 18px 34px rgba(0,0,0,0.35))'}} />
        </div>
      </section>

      <section id="beneficios">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Por que o PAULO SAT</span>
            <h2>Feito certo, sem pagar duas vezes</h2>
          </div>
          <div className="benefits">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="#0F3B63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="#0F3B63" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Técnico certificado</h3>
              <p>Você não corre o risco de pagar duas vezes pelo mesmo serviço.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#0F3B63" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Atendimento rápido</h3>
              <p>Resolve o problema sem ficar dias sem TV.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" stroke="#0F3B63" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="2.5" stroke="#0F3B63" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Toda a região Sul Fluminense</h3>
              <p>Não precisa procurar atendimento em outra cidade.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="13" rx="2" stroke="#0F3B63" strokeWidth="2"/>
                  <path d="M3 10h18" stroke="#0F3B63" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Principais receptores</h3>
              <p>Trabalha com Century, Vivensys e SKY — cobre praticamente qualquer sistema.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0F3B63" strokeWidth="2"/>
                  <path d="M2 10h20" stroke="#0F3B63" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Aceita cartão</h3>
              <p>Você paga do jeito que for melhor pra você.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-8.13a4 4 0 110 8 4 4 0 010-8z" stroke="#0F3B63" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Um único responsável</h3>
              <p>Quem instala é quem te atende se der problema depois.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta">
        <div className="wrap">
          <div className="offer">
            <div>
              <span className="kicker">O que está incluso</span>
              <h2 style={{fontSize:26}}>Um serviço, resolução completa</h2>
              <ul className="offer-list">
                <li>✓ Instalação de antena</li>
                <li>✓ Mudança de endereço</li>
                <li>✓ Apontamento (SKY, OI, Claro TV)</li>
                <li>✓ Configuração de receptor (Century, Vivensys, SKY)</li>
              </ul>
            </div>
            <div className="offer-box">
              <p className="price-line">Pagamento em cartão ou combinado no WhatsApp</p>
              <p className="price-main">Orçamento sem compromisso</p>
              <a className="btn-primary" href="https://wa.me/5524981151736?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20sem%20compromisso." target="_blank" rel="noopener">Quero sinal de volta</a>
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Antes de chamar</span>
            <h2>Perguntas frequentes</h2>
          </div>
          <div className="acc">
            <div className="acc-item">
              <button className="acc-q">Atende em quais cidades?<span className="plus">+</span></button>
              <div className="acc-a"><p>Atendemos moradores de toda a região Sul Fluminense do RJ.</p></div>
            </div>
            <div className="acc-item">
              <button className="acc-q">Funciona pra qualquer tipo de sinal?<span className="plus">+</span></button>
              <div className="acc-a"><p>Trabalhamos com SKY, OI e Claro TV, além de receptores Century, Vivensys e SKY.</p></div>
            </div>
            <div className="acc-item">
              <button className="acc-q">Quanto tempo demora o atendimento?<span className="plus">+</span></button>
              <div className="acc-a"><p>Atendimento rápido — chame no WhatsApp que combinamos o melhor horário pra você.</p></div>
            </div>
            <div className="acc-item">
              <button className="acc-q">Precisa agendar com antecedência?<span className="plus">+</span></button>
              <div className="acc-a"><p>Não necessariamente. Chame no WhatsApp e vemos a disponibilidade mais próxima.</p></div>
            </div>
            <div className="acc-item">
              <button className="acc-q">Quais formas de pagamento?<span className="plus">+</span></button>
              <div className="acc-a"><p>Aceitamos cartão. Outras formas, é só combinar direto no WhatsApp.</p></div>
            </div>
            <div className="acc-item">
              <button className="acc-q">E se eu mudei de casa recentemente?<span className="plus">+</span></button>
              <div className="acc-a"><p>Fazemos a mudança de endereço da antena completa, sem você precisar comprar equipamento novo.</p></div>
            </div>
            <div className="acc-item">
              <button className="acc-q">Vocês atendem comércio também?<span className="plus">+</span></button>
              <div className="acc-a"><p>Sim, atendemos residências e comércios (bares, mercados, condomínios, etc.).</p></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="final-cta">
          <h2>Cansado de ficar sem sinal e sem solução?</h2>
          <p>O PAULO SAT resolve isso rápido, com técnico certificado, direto na sua casa ou comércio.</p>
          <a className="btn-primary" href="https://wa.me/5524981151736?text=Ol%C3%A1!%20Estou%20sem%20sinal%20na%20TV%20e%20preciso%20de%20ajuda." target="_blank" rel="noopener">
            Chamar no WhatsApp agora
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#13233A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="phone">📞 (24) 98115-1736</p>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="brand">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M6 24C6 15 12 9 21 9" stroke="#0F3B63" strokeWidth="2.4" strokeLinecap="round"/>
              <path d="M10 24C10 18 14 14 20 14" stroke="#2E6FA8" strokeWidth="2.4" strokeLinecap="round"/>
              <circle cx="24" cy="8" r="3" fill="#E8B93C"/>
            </svg>
            PAULO SAT
          </div>
          <p className="footer-note">Instalação e manutenção de antenas — Sul Fluminense, RJ · (24) 98115-1736</p>
        </div>
      </footer>

      <a className="sticky-wa" href="https://wa.me/5524981151736?text=Ol%C3%A1!%20Estou%20sem%20sinal%20na%20TV%20e%20preciso%20de%20ajuda." target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.6-1.28 1.17-1.77 1.24-.45.07-1.02.1-1.65-.1-.38-.12-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.08-1.43-1.08-2.73s.68-1.94.92-2.2c.24-.27.53-.34.7-.34h.5c.16 0 .38-.06.6.45.22.55.75 1.9.82 2.03.07.13.11.29.02.47-.09.18-.14.29-.27.44-.13.16-.28.35-.4.47-.13.13-.27.27-.12.53.16.27.7 1.16 1.5 1.88 1.03.92 1.9 1.2 2.17 1.34.27.13.42.11.58-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.27.13.44.2.5.31.07.13.07.7-.15 1.3z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </>
  )
}
