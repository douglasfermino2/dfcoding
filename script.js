/* ==========================================================================
   DF Coding - Interactive & Dynamic Logic Script with i18n Support
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Translations Dictionary (PT / EN)
       ========================================================================== */
    const translations = {
        pt: {
            // Meta & Head
            "page.title": "DF Coding | Engenharia de Software Premium & I.A.",
            "page.description": "DF Coding - Soluções de software premium. Engenharia de APIs robustas, inteligência artificial integrada, arquiteturas SaaS escaláveis e landing pages exclusivas de alta performance.",
            "og.title": "DF Coding | Engenharia de Software Premium & I.A.",
            "og.description": "Engenharia de software sob medida. Conectamos sua empresa ao futuro com APIs seguras, agentes de inteligência artificial e plataformas SaaS sob medida.",

            // Navigation & Aria
            "nav.home": "Início",
            "nav.services": "Serviços",
            "nav.technologies": "Tecnologias",
            "nav.demo": "Demonstração",
            "nav.estimator": "Estimador",
            "nav.contact": "Contato",
            "aria.menuToggle": "Abrir menu de navegação",

            // Hero Section
            "hero.badge": "Disponível para novos projetos",
            "hero.title": "Transformando código em <span class=\"text-gradient\">soluções inteligentes</span>",
            "hero.subtitle": "Engenharia de software premium sob medida. Desenvolvemos APIs robustas, arquiteturas SaaS escaláveis, integrações avançadas com I.A. e landing pages exclusivas projetadas para alta conversão.",
            "hero.btnSimulate": "Simular Projeto",
            "hero.btnSkills": "Ver Habilidades",
            "hero.card1Title": "SaaS Escalável",
            "hero.card1Desc": "Multi-tenant & Pagamentos",
            "hero.card2Title": "Agentes de I.A.",
            "hero.card2Desc": "LLMs & Automação RAG",

            // Services Section
            "services.title": "O que podemos construir para <span class=\"text-gradient\">você</span>",
            "services.subtitle": "Combinamos arquiteturas de ponta com design de alta fidelidade para entregar o melhor software do mercado.",
            "services.s1Title": "Inteligência Artificial & Agentes",
            "services.s1Desc": "Integramos modelos de linguagem (LLMs), criamos assistentes virtuais cognitivos autônomos, sistemas RAG (Retrieval-Augmented Generation) para consulta a dados internos e automações que otimizam horas de trabalho manual.",
            "services.s2Title": "Engenharia de APIs Robustas",
            "services.s2Desc": "Desenvolvemos APIs RESTful e GraphQL ultra-rápidas em Node.js ou Python. Focamos em segurança (OAuth2, JWT, rate-limiting), alta escalabilidade e integrações impecáveis com bancos de dados relacionais e NoSQL.",
            "services.s3Title": "Plataformas SaaS Completas",
            "services.s3Desc": "Arquitetamos o seu Software as a Service do zero. Desenvolvemos desde o controle multi-tenant, integração avançada com gateways de pagamento (Stripe, Asaas, etc.), dashboards analíticos interativos até painéis admin inteligentes.",
            "services.s4Title": "Landing Pages de Alta Conversão",
            "services.s4Desc": "Desenvolvemos landing pages e páginas institucionais com design exclusivo e autoral, totalmente otimizadas para carregamento rápido (performance nota 100 no Lighthouse), SEO avançado e prontas para converter visitantes em clientes.",
            "services.s5Title": "Soluções Customizadas & DevOps",
            "services.s5Desc": "Otimização de consultas lentas em bancos de dados, configuração de pipelines de CI/CD para automação de deploys, containerização de aplicações com Docker e infraestrutura segura em nuvem (AWS/GCP).",
            "services.highlightBadge": "DIFERENCIAL",
            "services.highlightTitle": "Projetos 100% Personalizados",
            "services.highlightDesc": "Não usamos templates genéricos ou construtores de arrastar e soltar que deixam seu site lento. Cada linha de código é escrita sob medida para garantir design único, performance incrível e o máximo de exclusividade para o seu negócio.",
            "services.tagCustomDesign": "Design Sob Medida",
            "services.tagZeroBloat": "Zero Bloat",
            "services.tagPerfectSeo": "SEO Perfeito",

            // Tech Stack Section
            "tech.title": "Nossa Stack de <span class=\"text-gradient\">Tecnologia</span>",
            "tech.subtitle": "Trabalhamos com o ecossistema mais moderno e performático do desenvolvimento de software atual.",
            "tech.tsDesc": "Tipagem estática para código seguro e manutenível.",
            "tech.jsDesc": "Interatividade de alta velocidade no ecossistema web.",
            "tech.nodeDesc": "Ambiente runtime ultra-rápido para APIs escaláveis.",
            "tech.pythonDesc": "Perfeito para engenharia de dados, scripts e I.A.",
            "tech.postgresDesc": "O banco de dados relacional mais robusto do mundo.",
            "tech.dockerDesc": "Containerização para deploys consistentes e portáveis.",
            "tech.awsDesc": "Infraestrutura em nuvem elástica e de alta disponibilidade.",
            "tech.geminiDesc": "Integração de ponta para modelos de IA multimodais.",

            // Terminal Section
            "terminal.title": "Nossa API em Ação",
            "terminal.subtitle": "Explore respostas reais e veja como estruturamos dados e inteligência para impulsionar sua plataforma.",
            "terminal.loading": "// Carregando dados da requisição...",

            // Estimator Section
            "estimator.title": "Estime o Escopo do seu <span class=\"text-gradient\">Projeto</span>",
            "estimator.subtitle": "Selecione as funcionalidades desejadas abaixo para receber uma estimativa instantânea de tempo e complexidade de engenharia.",
            "estimator.featuresHeader": "Funcionalidades",
            "estimator.featIaTitle": "Agente de I.A. & Integrações",
            "estimator.featIaDesc": "Modelos de IA, RAG, automação cognitiva",
            "estimator.featApiTitle": "API Dedicada & Banco de Dados",
            "estimator.featApiDesc": "Backend estruturado, segurança, modelagem SQL",
            "estimator.featSaasTitle": "Painel SaaS & Autenticação",
            "estimator.featSaasDesc": "Controle multi-tenant, login de usuários, Stripe",
            "estimator.featLpTitle": "Landing Page Premium / Institucional",
            "estimator.featLpDesc": "Design exclusivo, responsivo e focado em SEO",
            "estimator.featDevopsTitle": "Infraestrutura em Nuvem & DevOps",
            "estimator.featDevopsDesc": "Docker, CI/CD, Deploy AWS/Cloudflare",
            "estimator.resultHeader": "Estimativa Técnica",
            "estimator.labelTime": "Tempo Estimado",
            "estimator.labelComplexity": "Complexidade do Projeto",
            "estimator.labelStack": "Stack Recomendada",
            "estimator.btnRequest": "Quero Desenvolver este Projeto",
            "estimator.daysUnit": "dias",
            "estimator.complexityLow": "Baixa",
            "estimator.complexityMed": "Média",
            "estimator.complexityHigh": "Alta / Complexo",
            "estimator.uponRequest": "Sob Consulta",
            "estimator.msgIntro": "Olá! Gostaria de simular um projeto com a DF Coding com os seguintes recursos:\n",
            "estimator.msgEstimatedTime": "Tempo estimado sugerido:",
            "estimator.msgOutro": "Fico no aguardo do contato para refinamento.",

            // Contact Section
            "contact.title": "Pronto para iniciar seu <span class=\"text-gradient\">projeto</span>?",
            "contact.subtitle": "Entre em contato hoje mesmo. Respondemos em menos de 24 horas com uma proposta inicial detalhada de design e engenharia.",
            "contact.emailTitle": "E-mail corporativo",
            "contact.whatsappTitle": "WhatsApp de Atendimento",
            "contact.nameLabel": "Seu Nome",
            "contact.emailLabel": "E-mail de Contato",
            "contact.msgLabel": "Fale sobre seu projeto (SaaS, API, I.A. ...)",
            "contact.errName": "Por favor, insira seu nome.",
            "contact.errEmail": "Insira um e-mail válido.",
            "contact.errMsg": "Por favor, conte-nos um pouco sobre seu projeto.",
            "contact.submitBtn": "Enviar Proposta",
            "contact.successTitle": "Proposta Recebida com Sucesso!",
            "contact.successTextPre": "Obrigado pelo contato, ",
            "contact.successTextMid": ". Analisaremos sua ideia e entraremos em contato via ",
            "contact.successTextPost": " nas próximas horas.",
            "contact.resetBtn": "Enviar outra mensagem",
            "contact.whatsappMsg": "Oi, gostaria de fazer um projeto.",

            // Footer
            "footer.brandDesc": "Engenharia de software focada em alta performance, robustez e inovação com inteligência artificial.",
            "footer.navTitle": "Navegação",
            "footer.skillsTitle": "Habilidades",
            "footer.skill1": "Agentes Inteligentes",
            "footer.skill2": "Engenharia de APIs",
            "footer.skill3": "SaaS Escaláveis",
            "footer.skill4": "Páginas Exclusivas",
            "footer.copyright": "© 2019 DF Coding. Todos os direitos reservados. Projetado para máxima performance."
        },
        en: {
            // Meta & Head
            "page.title": "DF Coding | Premium Software Engineering & AI",
            "page.description": "DF Coding - Premium software solutions. Robust API engineering, integrated artificial intelligence, scalable SaaS architectures, and high-performance exclusive landing pages.",
            "og.title": "DF Coding | Premium Software Engineering & AI",
            "og.description": "Tailor-made software engineering. We connect your business to the future with secure APIs, AI agents, and custom SaaS platforms.",

            // Navigation & Aria
            "nav.home": "Home",
            "nav.services": "Services",
            "nav.technologies": "Technologies",
            "nav.demo": "Demo",
            "nav.estimator": "Estimator",
            "nav.contact": "Contact",
            "aria.menuToggle": "Open navigation menu",

            // Hero Section
            "hero.badge": "Available for new projects",
            "hero.title": "Transforming code into <span class=\"text-gradient\">intelligent solutions</span>",
            "hero.subtitle": "Tailor-made premium software engineering. We build robust APIs, scalable SaaS architectures, advanced AI integrations, and exclusive landing pages crafted for high conversion.",
            "hero.btnSimulate": "Simulate Project",
            "hero.btnSkills": "View Skills",
            "hero.card1Title": "Scalable SaaS",
            "hero.card1Desc": "Multi-tenant & Payments",
            "hero.card2Title": "AI Agents",
            "hero.card2Desc": "LLMs & RAG Automation",

            // Services Section
            "services.title": "What we can build for <span class=\"text-gradient\">you</span>",
            "services.subtitle": "We combine cutting-edge architectures with high-fidelity design to deliver best-in-class software.",
            "services.s1Title": "Artificial Intelligence & Agents",
            "services.s1Desc": "We integrate Large Language Models (LLMs), build autonomous cognitive virtual assistants, RAG (Retrieval-Augmented Generation) systems for internal data querying, and automations that eliminate hours of manual work.",
            "services.s2Title": "Robust API Engineering",
            "services.s2Desc": "We develop ultra-fast RESTful and GraphQL APIs in Node.js or Python. We focus on security (OAuth2, JWT, rate-limiting), high scalability, and seamless integration with relational and NoSQL databases.",
            "services.s3Title": "Full SaaS Platforms",
            "services.s3Desc": "We architect your Software as a Service from scratch. From multi-tenant isolation and payment gateway integration (Stripe, Asaas, etc.) to interactive analytics dashboards and intelligent admin portals.",
            "services.s4Title": "High-Conversion Landing Pages",
            "services.s4Desc": "We craft bespoke landing pages and institutional websites with original design, fully optimized for lightning-fast load times (100 Lighthouse score), advanced SEO, and maximum conversion rates.",
            "services.s5Title": "Custom Solutions & DevOps",
            "services.s5Desc": "Slow database query optimization, automated CI/CD deployment pipelines, containerization with Docker, and robust cloud infrastructure across AWS/GCP.",
            "services.highlightBadge": "DIFFERENTIAL",
            "services.highlightTitle": "100% Tailor-Made Projects",
            "services.highlightDesc": "We never use generic templates or drag-and-drop builders that bloat your site. Every line of code is custom-written to guarantee unique aesthetics, stellar performance, and total exclusivity for your brand.",
            "services.tagCustomDesign": "Custom Design",
            "services.tagZeroBloat": "Zero Bloat",
            "services.tagPerfectSeo": "Perfect SEO",

            // Tech Stack Section
            "tech.title": "Our Technology <span class=\"text-gradient\">Stack</span>",
            "tech.subtitle": "We work with the most modern, robust, and performant ecosystem in software development today.",
            "tech.tsDesc": "Static typing for rock-solid, maintainable codebases.",
            "tech.jsDesc": "High-speed interactivity across modern web platforms.",
            "tech.nodeDesc": "Ultra-fast runtime environment for scalable APIs.",
            "tech.pythonDesc": "Ideal for data engineering, automation scripts, and AI.",
            "tech.postgresDesc": "The world's most advanced relational database.",
            "tech.dockerDesc": "Containerization for consistent and portable deployments.",
            "tech.awsDesc": "Elastic, highly available cloud infrastructure.",
            "tech.geminiDesc": "Cutting-edge integration for multimodal AI models.",

            // Terminal Section
            "terminal.title": "Our API in Action",
            "terminal.subtitle": "Explore real-world responses and see how we structure data and intelligence to power your platform.",
            "terminal.loading": "// Loading request payload...",

            // Estimator Section
            "estimator.title": "Estimate your Project <span class=\"text-gradient\">Scope</span>",
            "estimator.subtitle": "Select your desired features below to get an instant estimate of engineering time and project complexity.",
            "estimator.featuresHeader": "Features",
            "estimator.featIaTitle": "AI Agents & Integrations",
            "estimator.featIaDesc": "AI models, RAG systems, cognitive automation",
            "estimator.featApiTitle": "Dedicated API & Database",
            "estimator.featApiDesc": "Structured backend, security, SQL modeling",
            "estimator.featSaasTitle": "SaaS Dashboard & Auth",
            "estimator.featSaasDesc": "Multi-tenant control, user auth, Stripe billing",
            "estimator.featLpTitle": "Premium Landing Page / Website",
            "estimator.featLpDesc": "Bespoke design, responsive & SEO-focused",
            "estimator.featDevopsTitle": "Cloud Infrastructure & DevOps",
            "estimator.featDevopsDesc": "Docker, CI/CD, AWS/Cloudflare Deploy",
            "estimator.resultHeader": "Technical Estimate",
            "estimator.labelTime": "Estimated Time",
            "estimator.labelComplexity": "Project Complexity",
            "estimator.labelStack": "Recommended Stack",
            "estimator.btnRequest": "I Want to Build this Project",
            "estimator.daysUnit": "days",
            "estimator.complexityLow": "Low",
            "estimator.complexityMed": "Medium",
            "estimator.complexityHigh": "High / Complex",
            "estimator.uponRequest": "Upon Request",
            "estimator.msgIntro": "Hello! I would like to simulate a project with DF Coding with the following features:\n",
            "estimator.msgEstimatedTime": "Suggested estimated time:",
            "estimator.msgOutro": "Looking forward to hearing from you for further refinement.",

            // Contact Section
            "contact.title": "Ready to launch your <span class=\"text-gradient\">project</span>?",
            "contact.subtitle": "Get in touch today. We reply within 24 hours with a detailed initial design and engineering proposal.",
            "contact.emailTitle": "Corporate Email",
            "contact.whatsappTitle": "Customer WhatsApp",
            "contact.nameLabel": "Your Name",
            "contact.emailLabel": "Contact Email",
            "contact.msgLabel": "Tell us about your project (SaaS, API, AI ...)",
            "contact.errName": "Please enter your name.",
            "contact.errEmail": "Please enter a valid email.",
            "contact.errMsg": "Please tell us a bit about your project.",
            "contact.submitBtn": "Send Proposal",
            "contact.successTitle": "Proposal Received Successfully!",
            "contact.successTextPre": "Thank you for reaching out, ",
            "contact.successTextMid": ". We will analyze your idea and contact you at ",
            "contact.successTextPost": " within the next few hours.",
            "contact.resetBtn": "Send another message",
            "contact.whatsappMsg": "Hi, I would like to start a project.",

            // Footer
            "footer.brandDesc": "Software engineering focused on high performance, robustness, and AI innovation.",
            "footer.navTitle": "Navigation",
            "footer.skillsTitle": "Skills",
            "footer.skill1": "Intelligent Agents",
            "footer.skill2": "API Engineering",
            "footer.skill3": "Scalable SaaS",
            "footer.skill4": "Bespoke Pages",
            "footer.copyright": "© 2019 DF Coding. All rights reserved. Designed for maximum performance."
        }
    };

    /* ==========================================================================
       Language State Management (i18n)
       ========================================================================== */
    let currentLang = 'pt';

    function getInitialLanguage() {
        // 1. Check URL param ?lang=en or ?lang=pt
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && (langParam.toLowerCase() === 'en' || langParam.toLowerCase() === 'pt')) {
            return langParam.toLowerCase();
        }

        // 2. Check localStorage
        const storedLang = localStorage.getItem('df_lang');
        if (storedLang && (storedLang === 'en' || storedLang === 'pt')) {
            return storedLang;
        }

        // 3. Check browser language
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('pt')) {
            return 'pt';
        } else if (browserLang.startsWith('en')) {
            return 'en';
        }

        return 'pt';
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('df_lang', lang);

        const dict = translations[lang];

        // 1. Update HTML tag and document metadata
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
        document.title = dict["page.title"];

        const metaDesc = document.getElementById('meta-description');
        if (metaDesc) metaDesc.setAttribute('content', dict["page.description"]);

        const ogTitle = document.getElementById('og-title');
        if (ogTitle) ogTitle.setAttribute('content', dict["og.title"]);

        const ogDesc = document.getElementById('og-description');
        if (ogDesc) ogDesc.setAttribute('content', dict["og.description"]);

        // 2. Update textContent elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // 3. Update innerHTML elements (containing gradient spans, etc.)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // 4. Update aria-label elements
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key]) {
                el.setAttribute('aria-label', dict[key]);
            }
        });

        // 5. Update WhatsApp Link with localized initial message
        const whatsappLink = document.getElementById('whatsappLink');
        if (whatsappLink) {
            const encodedMsg = encodeURIComponent(dict["contact.whatsappMsg"]);
            whatsappLink.href = `https://wa.me/5511970132219?text=${encodedMsg}`;
        }

        // 6. Update Language switcher UI active states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            }
        });

        // 7. Refresh dynamic components with localized content
        updateTerminalLanguage();
        calculateEstimate();
    }

    // Bind language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetLang = e.currentTarget.getAttribute('data-lang');
            if (targetLang && targetLang !== currentLang) {
                setLanguage(targetLang);
            }
        });
    });

    /* ==========================================================================
       Mobile Navigation Menu
       ========================================================================== */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    // Header styling shift on scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link highlighting on scroll
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       Mock API Terminal (Multilingual)
       ========================================================================== */
    const terminalCode = document.getElementById('terminalCode');
    const tabBtns = document.querySelectorAll('.tab-btn');

    const endpointsData = {
        pt: {
            ia: `{
  <span class="code-key">"status"</span>: <span class="code-string">"success"</span>,
  <span class="code-key">"agent"</span>: <span class="code-string">"DF-Agent-Cognitive-v3"</span>,
  <span class="code-key">"task"</span>: <span class="code-string">"RAG query database"</span>,
  <span class="code-key">"execution_time_ms"</span>: <span class="code-number">142</span>,
  <span class="code-key">"confidence_score"</span>: <span class="code-number">0.985</span>,
  <span class="code-key">"payload"</span>: {
    <span class="code-key">"query"</span>: <span class="code-string">"Analise de faturamento anual"</span>,
    <span class="code-key">"retrieved_nodes"</span>: <span class="code-number">8</span>,
    <span class="code-key">"synthesized_response"</span>: <span class="code-string">"Os dados indicam crescimento de 24% no Q2..."</span>
  }
}`,
            api: `{
  <span class="code-key">"api_name"</span>: <span class="code-string">"DF Coding Engine"</span>,
  <span class="code-key">"status"</span>: <span class="code-string">"operational"</span>,
  <span class="code-key">"version"</span>: <span class="code-string">"1.4.2"</span>,
  <span class="code-key">"uptime_percent"</span>: <span class="code-number">99.998</span>,
  <span class="code-key">"services"</span>: {
    <span class="code-key">"db_pool"</span>: <span class="code-string">"connected"</span>,
    <span class="code-key">"redis_cache"</span>: <span class="code-string">"hit_rate_92.4%"</span>,
    <span class="code-key">"jwt_auth"</span>: <span class="code-string">"active"</span>
  }
}`,
            saas: `{
  <span class="code-key">"event"</span>: <span class="code-string">"invoice.payment_succeeded"</span>,
  <span class="code-key">"gateway"</span>: <span class="code-string">"Stripe/Asaas"</span>,
  <span class="code-key">"tenant_id"</span>: <span class="code-string">"tenant_9a7b2c"</span>,
  <span class="code-key">"amount_cents"</span>: <span class="code-number">14900</span>,
  <span class="code-key">"currency"</span>: <span class="code-string">"brl"</span>,
  <span class="code-key">"subscription"</span>: {
    <span class="code-key">"plan"</span>: <span class="code-string">"Enterprise Pro"</span>,
    <span class="code-key">"billing_cycle"</span>: <span class="code-string">"monthly"</span>
  }
}`,
            lp: `{
  <span class="code-key">"page"</span>: <span class="code-string">"Landing Page Customizada"</span>,
  <span class="code-key">"lighthouse_scores"</span>: {
    <span class="code-key">"performance"</span>: <span class="code-number">100</span>,
    <span class="code-key">"seo"</span>: <span class="code-number">100</span>,
    <span class="code-key">"accessibility"</span>: <span class="code-number">98</span>,
    <span class="code-key">"best_practices"</span>: <span class="code-number">100</span>
  },
  <span class="code-key">"metrics"</span>: {
    <span class="code-key">"conversion_rate_percent"</span>: <span class="code-number">14.8</span>,
    <span class="code-key">"bounce_rate_percent"</span>: <span class="code-number">24.1</span>,
    <span class="code-key">"load_time_seconds"</span>: <span class="code-number">0.65</span>
  }
}`
        },
        en: {
            ia: `{
  <span class="code-key">"status"</span>: <span class="code-string">"success"</span>,
  <span class="code-key">"agent"</span>: <span class="code-string">"DF-Agent-Cognitive-v3"</span>,
  <span class="code-key">"task"</span>: <span class="code-string">"RAG query database"</span>,
  <span class="code-key">"execution_time_ms"</span>: <span class="code-number">142</span>,
  <span class="code-key">"confidence_score"</span>: <span class="code-number">0.985</span>,
  <span class="code-key">"payload"</span>: {
    <span class="code-key">"query"</span>: <span class="code-string">"Annual revenue analysis"</span>,
    <span class="code-key">"retrieved_nodes"</span>: <span class="code-number">8</span>,
    <span class="code-key">"synthesized_response"</span>: <span class="code-string">"Data indicates a 24% revenue increase in Q2..."</span>
  }
}`,
            api: `{
  <span class="code-key">"api_name"</span>: <span class="code-string">"DF Coding Engine"</span>,
  <span class="code-key">"status"</span>: <span class="code-string">"operational"</span>,
  <span class="code-key">"version"</span>: <span class="code-string">"1.4.2"</span>,
  <span class="code-key">"uptime_percent"</span>: <span class="code-number">99.998</span>,
  <span class="code-key">"services"</span>: {
    <span class="code-key">"db_pool"</span>: <span class="code-string">"connected"</span>,
    <span class="code-key">"redis_cache"</span>: <span class="code-string">"hit_rate_92.4%"</span>,
    <span class="code-key">"jwt_auth"</span>: <span class="code-string">"active"</span>
  }
}`,
            saas: `{
  <span class="code-key">"event"</span>: <span class="code-string">"invoice.payment_succeeded"</span>,
  <span class="code-key">"gateway"</span>: <span class="code-string">"Stripe/Asaas"</span>,
  <span class="code-key">"tenant_id"</span>: <span class="code-string">"tenant_9a7b2c"</span>,
  <span class="code-key">"amount_cents"</span>: <span class="code-number">14900</span>,
  <span class="code-key">"currency"</span>: <span class="code-string">"usd"</span>,
  <span class="code-key">"subscription"</span>: {
    <span class="code-key">"plan"</span>: <span class="code-string">"Enterprise Pro"</span>,
    <span class="code-key">"billing_cycle"</span>: <span class="code-string">"monthly"</span>
  }
}`,
            lp: `{
  <span class="code-key">"page"</span>: <span class="code-string">"Custom Bespoke Landing Page"</span>,
  <span class="code-key">"lighthouse_scores"</span>: {
    <span class="code-key">"performance"</span>: <span class="code-number">100</span>,
    <span class="code-key">"seo"</span>: <span class="code-number">100</span>,
    <span class="code-key">"accessibility"</span>: <span class="code-number">98</span>,
    <span class="code-key">"best_practices"</span>: <span class="code-number">100</span>
  },
  <span class="code-key">"metrics"</span>: {
    <span class="code-key">"conversion_rate_percent"</span>: <span class="code-number">14.8</span>,
    <span class="code-key">"bounce_rate_percent"</span>: <span class="code-number">24.1</span>,
    <span class="code-key">"load_time_seconds"</span>: <span class="code-number">0.65</span>
  }
}`
        }
    };

    let typingTimer = null;
    function typeHtmlContent(element, htmlContent, speed = 8) {
        if (typingTimer) clearTimeout(typingTimer);
        element.innerHTML = '';

        const tokens = htmlContent.match(/<[^>]+>|[^<]+/g) || [];
        let tokenIndex = 0;
        let charIndex = 0;
        let currentHTML = '';

        function type() {
            if (tokenIndex >= tokens.length) return;

            const token = tokens[tokenIndex];

            if (token.startsWith('<')) {
                currentHTML += token;
                element.innerHTML = currentHTML;
                tokenIndex++;
                type();
            } else {
                if (charIndex < token.length) {
                    currentHTML += token[charIndex];
                    element.innerHTML = currentHTML;
                    charIndex++;
                    typingTimer = setTimeout(type, speed);
                } else {
                    charIndex = 0;
                    tokenIndex++;
                    type();
                }
            }
        }
        type();
    }

    let currentEndpoint = 'ia';

    function updateTerminalLanguage() {
        if (!terminalCode) return;
        const currentData = endpointsData[currentLang] || endpointsData.pt;
        if (currentData[currentEndpoint]) {
            typeHtmlContent(terminalCode, currentData[currentEndpoint]);
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentEndpoint = btn.getAttribute('data-endpoint') || 'ia';
            const currentData = endpointsData[currentLang] || endpointsData.pt;
            typeHtmlContent(terminalCode, currentData[currentEndpoint]);
        });
    });

    /* ==========================================================================
       Interactive Project Estimator
       ========================================================================== */
    const checkboxes = {
        ia: document.getElementById('feature-ia'),
        api: document.getElementById('feature-api'),
        saas: document.getElementById('feature-saas'),
        lp: document.getElementById('feature-lp'),
        devops: document.getElementById('feature-devops')
    };

    const estimatedTime = document.getElementById('estimated-time');
    const complexityBar = document.getElementById('complexity-bar');
    const complexityText = document.getElementById('complexity-text');
    const recommendedStack = document.getElementById('recommended-stack');
    const btnRequestProject = document.getElementById('btn-request-project');
    const messageInput = document.getElementById('message');

    const featureWeights = {
        ia: { days: 20, complexity: 25, stack: ['Gemini API', 'Python'] },
        api: { days: 30, complexity: 25, stack: ['Node.js', 'TypeScript', 'PostgreSQL'] },
        saas: { days: 45, complexity: 30, stack: ['Stripe Integration', 'JWT Auth'] },
        lp: { days: 5, complexity: 10, stack: ['HTML5/CSS3', 'SEO Vanilla'] },
        devops: { days: 15, complexity: 10, stack: ['Docker', 'AWS Hosting'] }
    };

    function calculateEstimate() {
        const dict = translations[currentLang] || translations.pt;
        let totalDays = 0;
        let totalComplexity = 0;
        let selectedStack = new Set();
        let selectedTitles = [];

        // Accumulate data based on selected features
        for (const [key, checkbox] of Object.entries(checkboxes)) {
            if (checkbox && checkbox.checked) {
                const data = featureWeights[key];
                totalDays += data.days;
                totalComplexity += data.complexity;
                data.stack.forEach(tech => selectedStack.add(tech));

                // Read title from current label
                const titleEl = checkbox.closest('.checkbox-container').querySelector('.option-title');
                if (titleEl) {
                    selectedTitles.push(titleEl.textContent.trim());
                }
            }
        }

        // Adjustments if multiple complex items are checked (15% cohesion discount)
        const checkedCount = Object.values(checkboxes).filter(c => c && c.checked).length;
        if (checkedCount > 2) {
            totalDays = Math.round(totalDays * 0.85);
        }

        totalComplexity = Math.min(totalComplexity, 100);

        // Update estimated time
        if (estimatedTime) {
            estimatedTime.textContent = totalDays > 0 ? `~${totalDays} ${dict["estimator.daysUnit"]}` : dict["estimator.uponRequest"];
        }

        // Update complexity bar & label
        if (complexityBar && complexityText) {
            complexityBar.style.width = `${totalComplexity}%`;
            if (totalComplexity <= 30) {
                complexityBar.style.background = 'var(--tertiary)';
                complexityText.textContent = dict["estimator.complexityLow"];
                complexityText.style.color = 'var(--tertiary)';
            } else if (totalComplexity <= 60) {
                complexityBar.style.background = 'var(--gradient-primary)';
                complexityText.textContent = dict["estimator.complexityMed"];
                complexityText.style.color = 'var(--secondary)';
            } else {
                complexityBar.style.background = 'linear-gradient(135deg, var(--primary) 0%, #ef4444 100%)';
                complexityText.textContent = dict["estimator.complexityHigh"];
                complexityText.style.color = '#ef4444';
            }
        }

        // Render Stack recommendation
        if (recommendedStack) {
            recommendedStack.innerHTML = '';
            if (selectedStack.size > 0) {
                selectedStack.forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tech-tag';
                    span.textContent = tech;
                    recommendedStack.appendChild(span);
                });
            } else {
                recommendedStack.innerHTML = `<span class="tech-tag">${dict["estimator.uponRequest"]}</span>`;
            }
        }
    }

    // Bind checkbox change listeners
    for (const checkbox of Object.values(checkboxes)) {
        if (checkbox) {
            checkbox.addEventListener('change', calculateEstimate);
        }
    }

    // Pre-populate message when user clicks "Quero Desenvolver este Projeto" / "I Want to Build this Project"
    if (btnRequestProject) {
        btnRequestProject.addEventListener('click', () => {
            if (messageInput) {
                const dict = translations[currentLang] || translations.pt;
                let totalDays = 0;
                let selectedTitles = [];

                for (const [key, checkbox] of Object.entries(checkboxes)) {
                    if (checkbox && checkbox.checked) {
                        totalDays += featureWeights[key].days;
                        const titleEl = checkbox.closest('.checkbox-container').querySelector('.option-title');
                        if (titleEl) {
                            selectedTitles.push(titleEl.textContent.trim());
                        }
                    }
                }

                const checkedCount = Object.values(checkboxes).filter(c => c && c.checked).length;
                if (checkedCount > 2) {
                    totalDays = Math.round(totalDays * 0.85);
                }

                let customMsg = dict["estimator.msgIntro"];
                selectedTitles.forEach(t => {
                    customMsg += `- ${t}\n`;
                });
                customMsg += `${dict["estimator.msgEstimatedTime"]} ~${totalDays} ${dict["estimator.daysUnit"]}.\n${dict["estimator.msgOutro"]}`;

                messageInput.value = customMsg;
                messageInput.dispatchEvent(new Event('input'));
            }
        });
    }

    /* ==========================================================================
       Premium Contact Form Validator
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const successState = document.getElementById('successState');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const spinner = submitBtn ? submitBtn.querySelector('.spinner') : null;

    const clientNameSpan = document.getElementById('clientName');
    const clientEmailSpan = document.getElementById('clientEmail');
    const resetContactBtn = document.getElementById('resetContactBtn');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    function validateField(input, validationFn) {
        if (!input) return true;
        const group = input.closest('.form-group');
        if (!group) return true;

        if (!validationFn(input.value)) {
            group.classList.add('invalid');
            return false;
        } else {
            group.classList.remove('invalid');
            return true;
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            validateField(nameInput, (val) => val.trim().length > 0);
        });
        nameInput.addEventListener('input', () => {
            if (nameInput.closest('.form-group').classList.contains('invalid')) {
                validateField(nameInput, (val) => val.trim().length > 0);
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            validateField(emailInput, (val) => emailRegex.test(val.trim()));
        });
        emailInput.addEventListener('input', () => {
            if (emailInput.closest('.form-group').classList.contains('invalid')) {
                validateField(emailInput, (val) => emailRegex.test(val.trim()));
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', () => {
            validateField(messageInput, (val) => val.trim().length > 0);
        });
        messageInput.addEventListener('input', () => {
            if (messageInput.closest('.form-group').classList.contains('invalid')) {
                validateField(messageInput, (val) => val.trim().length > 0);
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isNameValid = validateField(nameInput, (val) => val.trim().length > 0);
            const isEmailValid = validateField(emailInput, (val) => emailRegex.test(val.trim()));
            const isMsgValid = validateField(messageInput, (val) => val.trim().length > 0);

            if (isNameValid && isEmailValid && isMsgValid) {
                submitBtn.disabled = true;
                if (btnText) btnText.classList.add('hidden');
                if (spinner) spinner.classList.remove('hidden');

                setTimeout(() => {
                    if (clientNameSpan) clientNameSpan.textContent = nameInput.value;
                    if (clientEmailSpan) clientEmailSpan.textContent = emailInput.value;

                    contactForm.classList.add('hidden');
                    if (successState) successState.classList.remove('hidden');

                    submitBtn.disabled = false;
                    if (btnText) btnText.classList.remove('hidden');
                    if (spinner) spinner.classList.add('hidden');
                }, 1500);
            }
        });
    }

    if (resetContactBtn) {
        resetContactBtn.addEventListener('click', () => {
            if (contactForm) {
                contactForm.reset();
                contactForm.classList.remove('hidden');
                contactForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('invalid'));
            }
            if (successState) successState.classList.add('hidden');
        });
    }

    /* ==========================================================================
       Initial Boot & Language Initialization
       ========================================================================== */
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
});
