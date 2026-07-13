/* ==========================================================================
   DF Coding - Interactive & Dynamic Logic Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
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
            const sectionHeight = section.clientHeight;
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
       Mock API Terminal
       ========================================================================== */
    const terminalCode = document.getElementById('terminalCode');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // JSON response strings with HTML formatting for syntax highlighting
    const endpointsData = {
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
    };

    // Advanced tokenized typing animation function
    let typingTimer = null;
    function typeHtmlContent(element, htmlContent, speed = 8) {
        if (typingTimer) clearTimeout(typingTimer);
        element.innerHTML = '';
        
        // Match HTML tags and content tokens
        const tokens = htmlContent.match(/<[^>]+>|[^<]+/g) || [];
        let tokenIndex = 0;
        let charIndex = 0;
        let currentHTML = '';
        
        function type() {
            if (tokenIndex >= tokens.length) return;
            
            const token = tokens[tokenIndex];
            
            if (token.startsWith('<')) {
                // If it's a tag, render it instantly and proceed
                currentHTML += token;
                element.innerHTML = currentHTML;
                tokenIndex++;
                type();
            } else {
                // If it's text, type character by character
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

    // Setup tab button event listeners
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const endpoint = btn.getAttribute('data-endpoint');
            typeHtmlContent(terminalCode, endpointsData[endpoint]);
        });
    });

    // Run first tab initial load animation
    if (terminalCode && endpointsData.ia) {
        typeHtmlContent(terminalCode, endpointsData.ia);
    }

    /* ==========================================================================
       Interactive Project Estimator
       ========================================================================= */
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

    // Values definition
    const featureWeights = {
        ia: { days: 20, complexity: 25, stack: ['Gemini API', 'Python'] },
        api: { days: 30, complexity: 25, stack: ['Node.js', 'TypeScript', 'PostgreSQL'] },
        saas: { days: 45, complexity: 30, stack: ['Stripe Integration', 'JWT Auth'] },
        lp: { days: 5, complexity: 10, stack: ['HTML5/CSS3', 'SEO Vanilla'] },
        devops: { days: 15, complexity: 10, stack: ['Docker', 'AWS Hosting'] }
    };

    function calculateEstimate() {
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
                
                // Keep track of labels
                const title = checkbox.closest('.checkbox-container').querySelector('.option-title').textContent;
                selectedTitles.push(title);
            }
        }

        // Adjustments if multiple complex items are checked (cohesion time discount)
        const checkedCount = Object.values(checkboxes).filter(c => c && c.checked).length;
        if (checkedCount > 2) {
            totalDays = Math.round(totalDays * 0.85); // 15% discount for simultaneous development
        }
        
        // Cap complexity
        totalComplexity = Math.min(totalComplexity, 100);

        // Update DOM elements
        if (estimatedTime) {
            estimatedTime.textContent = totalDays > 0 ? `~${totalDays} dias` : 'Sob Consulta';
        }

        if (complexityBar) {
            complexityBar.style.width = `${totalComplexity}%`;
            // Color shifts based on complexity
            if (totalComplexity <= 30) {
                complexityBar.style.background = 'var(--tertiary)';
                complexityText.textContent = 'Baixa';
                complexityText.style.color = 'var(--tertiary)';
            } else if (totalComplexity <= 60) {
                complexityBar.style.background = 'var(--gradient-primary)';
                complexityText.textContent = 'Média';
                complexityText.style.color = 'var(--secondary)';
            } else {
                complexityBar.style.background = 'linear-gradient(135deg, var(--primary) 0%, #ef4444 100%)';
                complexityText.textContent = 'Alta / Complexo';
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
                recommendedStack.innerHTML = '<span class="tech-tag">Sob Consulta</span>';
            }
        }

        // Set action link callback to pre-populate message
        if (btnRequestProject) {
            btnRequestProject.addEventListener('click', (e) => {
                if (messageInput) {
                    let customMsg = `Olá! Gostaria de simular um projeto com a DF Coding com os seguintes recursos:\n`;
                    selectedTitles.forEach(t => {
                        customMsg += `- ${t}\n`;
                    });
                    customMsg += `Tempo estimado sugerido: ~${totalDays} dias.\nFico no aguardo do contato para refinamento.`;
                    
                    messageInput.value = customMsg;
                    // Trigger input event to move label if needed
                    messageInput.dispatchEvent(new Event('input'));
                }
            });
        }
    }

    // Attach listeners to checkboxes
    for (const checkbox of Object.values(checkboxes)) {
        if (checkbox) {
            checkbox.addEventListener('change', calculateEstimate);
        }
    }

    // Trigger initial calculation
    calculateEstimate();

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

    // Input elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    function validateField(input, errorElementId, validationFn) {
        const errorSpan = document.getElementById(errorElementId);
        const group = input.closest('.form-group');
        
        if (!validationFn(input.value)) {
            group.classList.add('invalid');
            return false;
        } else {
            group.classList.remove('invalid');
            return true;
        }
    }

    // Validate email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Live validation triggers on input blur
    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            validateField(nameInput, 'error-name', (val) => val.trim().length > 0);
        });
        nameInput.addEventListener('input', () => {
            if (nameInput.closest('.form-group').classList.contains('invalid')) {
                validateField(nameInput, 'error-name', (val) => val.trim().length > 0);
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            validateField(emailInput, 'error-email', (val) => emailRegex.test(val.trim()));
        });
        emailInput.addEventListener('input', () => {
            if (emailInput.closest('.form-group').classList.contains('invalid')) {
                validateField(emailInput, 'error-email', (val) => emailRegex.test(val.trim()));
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', () => {
            validateField(messageInput, 'error-message', (val) => val.trim().length > 0);
        });
        messageInput.addEventListener('input', () => {
            if (messageInput.closest('.form-group').classList.contains('invalid')) {
                validateField(messageInput, 'error-message', (val) => val.trim().length > 0);
            }
        });
    }

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Execute all validations
            const isNameValid = validateField(nameInput, 'error-name', (val) => val.trim().length > 0);
            const isEmailValid = validateField(emailInput, 'error-email', (val) => emailRegex.test(val.trim()));
            const isMsgValid = validateField(messageInput, 'error-message', (val) => val.trim().length > 0);
            
            if (isNameValid && isEmailValid && isMsgValid) {
                // Show loading spinner
                submitBtn.disabled = true;
                if (btnText) btnText.classList.add('hidden');
                if (spinner) spinner.classList.remove('hidden');
                
                // Simulate an API submit call
                setTimeout(() => {
                    // Update success texts
                    if (clientNameSpan) clientNameSpan.textContent = nameInput.value;
                    if (clientEmailSpan) clientEmailSpan.textContent = emailInput.value;
                    
                    // Show success block, hide form content
                    contactForm.classList.add('hidden');
                    if (successState) successState.classList.remove('hidden');
                    
                    // Reset loaders
                    submitBtn.disabled = false;
                    if (btnText) btnText.classList.remove('hidden');
                    if (spinner) spinner.classList.add('hidden');
                }, 1500);
            }
        });
    }

    // Reset form trigger
    if (resetContactBtn) {
        resetContactBtn.addEventListener('click', () => {
            if (contactForm) {
                contactForm.reset();
                contactForm.classList.remove('hidden');
                // Remove floating active states
                contactForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('invalid'));
            }
            if (successState) successState.classList.add('hidden');
        });
    }
});
