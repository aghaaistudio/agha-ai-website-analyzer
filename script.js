/* ==========================================================================
   AGHA AI STUDIO - CORE LOGIC & DIAGNOSTIC ENGINE
   ========================================================================== */

// System State Architecture
let currentDevice = 'desktop';
let globalBrandingTitle = "Professional AI Website Audit Platform";

// Operational Parameters Preset Templates
const systemPresets = {
    desktop: {
        score: 94,
        dns: "11ms",
        size: "1.8MB",
        fcp: "0.6s",
        lcp: "2.1s",
        cls: "0.04",
        fid: "12ms",
        seo: 96,
        performance: 94,
        security: 90,
        brokenLinks: "0 Detected",
        brokenImgs: "0 Detected",
        jsErrors: "None",
        wcag: "AAA Compliant",
        redirects: "0 Chains",
        imgScore: "92% Optimized",
        cache: "TTL 86400s"
    },
    mobile: {
        score: 79,
        dns: "18ms",
        size: "2.4MB",
        fcp: "1.9s",
        lcp: "4.8s",
        cls: "0.15",
        fid: "28ms",
        seo: 88,
        performance: 79,
        security: 90,
        brokenLinks: "2 Warnings",
        brokenImgs: "1 Warning",
        jsErrors: "1 Caught",
        wcag: "AA Compliant",
        redirects: "1 Chain",
        imgScore: "54% Optimized",
        cache: "TTL 3600s"
    }
};

/**
 * Enterprise Portal Authentication Logic
 * Enforces lowercase name input validation
 */
function authenticateUser() {
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    
    // Strict requirement: lowercase string matching
    if (pass === "agha") {
        document.getElementById('loginGate').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loginGate').style.display = 'none';
        }, 600);
        
        // Synchronize branding elements
        document.getElementById('profileEmailDisplay').innerText = email;
        if(email.includes('@')) {
            const letter = email.charAt(0).toUpperCase();
            document.getElementById('avatarLetter').innerText = letter;
        }
    } else {
        alert("Invalid Access Credentials. Hint: Use standard lowercase configuration password.");
    }
}

/**
 * Premium Sidebar Router System
 */
function navigateTo(panelId) {
    // Hide all view panels
    const panels = document.querySelectorAll('.view-panel');
    panels.forEach(panel => panel.classList.remove('active-panel'));
    
    // Remove active status from navigation buttons
    const navButtons = document.querySelectorAll('.side-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Target target layer activation
    document.getElementById(panelId).classList.add('active-panel');
    
    // Dynamic control element tracking
    const currentNav = document.getElementById('nav-' + panelId.split('-')[1]);
    if(currentNav) currentNav.classList.add('active');
}

/**
 * Launch High-Fidelity Website Audit Pipeline Simulation
 */
function startSystemAnalysis() {
    const targetUrl = document.getElementById('targetUrl').value;
    if(!targetUrl) {
        alert("Please input a secure node URL target first.");
        return;
    }
    
    const loader = document.getElementById('loader');
    const results = document.getElementById('resultsPanel');
    const log = document.getElementById('loaderLog');
    
    results.style.display = 'none';
    loader.style.display = 'flex';
    
    // Asynchronous Execution Stage Triggers
    setTimeout(() => { log.innerText = "Parsing DOM Structure & Metadata Trees..."; }, 800);
    setTimeout(() => { log.innerText = "Evaluating Core Web Vitals Lifecycle Parameters..."; }, 1600);
    setTimeout(() => { log.innerText = "Running Cryptographic SSL Headers Diagnostics..."; }, 2400);
    
    setTimeout(() => {
        loader.style.display = 'none';
        results.style.display = 'flex';
        renderDiagnosticData();
        
        // Log notification entry inside AI Assistant Shell
        appendAiSystemMessage(`Analysis Complete for ${targetUrl}. Performance Score is ${systemPresets[currentDevice].score}%. Let me know if you need optimization patches.`);
    }, 3200);
}

/**
 * Render Comprehensive Diagnostic Data Outputs
 */
function renderDiagnosticData() {
    const data = systemPresets[currentDevice];
    
    // Main Panel Indexes Updates
    document.getElementById('primarySpeedScore').innerText = `${data.score}%`;
    document.getElementById('spec-dns-time').innerText = data.dns;
    document.getElementById('spec-page-size').innerText = data.size;
    
    // Render Custom Core Web Vitals Chart Bars Height
    document.getElementById('val-fcp').innerText = data.fcp;
    document.getElementById('val-lcp').innerText = data.lcp;
    document.getElementById('val-cls').innerText = data.cls;
    document.getElementById('val-fid').innerText = data.fid;
    
    // Map data metrics into heights dynamically
    document.getElementById('bar-fcp').style.height = currentDevice === 'desktop' ? '35px' : '75px';
    document.getElementById('bar-lcp').style.height = currentDevice === 'desktop' ? '50px' : '120px';
    document.getElementById('bar-cls').style.height = currentDevice === 'desktop' ? '20px' : '55px';
    document.getElementById('bar-fid').style.height = currentDevice === 'desktop' ? '30px' : '65px';
    
    // Inject Live Analytics Into Spec Matrix Dense Nodes
    document.getElementById('m-broken-links').innerText = data.brokenLinks;
    document.getElementById('m-broken-imgs').innerText = data.brokenImgs;
    document.getElementById('m-js-errors').innerText = data.jsErrors;
    document.getElementById('m-wcag').innerText = data.wcag;
    document.getElementById('m-redirects').innerText = data.redirects;
    document.getElementById('m-img-score').innerText = data.imgScore;
    document.getElementById('m-cache').innerText = data.cache;
    
    // Synchronize Triple Rings Score Gauges Visualizer
    animateTripleRings(data.seo, data.performance, data.security);
    
    // Synchronize Actionable Audits Text Context Alerts
    updateAuditAlertsUI(data);
}

/**
 * Handle Desktop / Mobile Toggle Switches
 */
function switchDevice(deviceType) {
    currentDevice = deviceType;
    
    document.getElementById('desktopBtn').classList.remove('active');
    document.getElementById('mobileBtn').classList.remove('active');
    
    if(deviceType === 'desktop') {
        document.getElementById('desktopBtn').classList.add('active');
    } else {
        document.getElementById('mobileBtn').classList.add('active');
    }
    
    // Refresh components state if results visible
    if(document.getElementById('resultsPanel').style.display !== 'none') {
        renderDiagnosticData();
    }
}

/**
 * Animate Triple Progress SVG Rings
 */
function animateTripleRings(seo, perf, sec) {
    const calculateOffset = (score) => 251.2 - (251.2 * score) / 100;
    
    document.getElementById('score-seo').innerText = `${seo}%`;
    document.getElementById('fill-seo').style.strokeDashoffset = calculateOffset(seo);
    
    document.getElementById('score-performance').innerText = `${perf}%`;
    document.getElementById('fill-performance').style.strokeDashoffset = calculateOffset(perf);
    
    document.getElementById('score-security').innerText = `${sec}%`;
    document.getElementById('fill-security').style.strokeDashoffset = calculateOffset(sec);
}

/**
 * Update Audit Alerts Layout Components Context
 */
function updateAuditAlertsUI(data) {
    const lcpDot = document.getElementById('status-dot-lcp');
    const seoDot = document.getElementById('status-dot-seo');
    
    if(currentDevice === 'desktop') {
        lcpDot.className = "audit-status status-excellent";
        document.getElementById('title-lcp').innerText = "Largest Contentful Paint (LCP) is Optimized";
        document.getElementById('desc-lcp').innerText = "Current value: 2.1s. Assets load via Cloudflare Edge nodes safely.";
        
        seoDot.className = "audit-status status-excellent";
        document.getElementById('title-seo').innerText = "Canonical Metadata Rules Configured";
        document.getElementById('desc-seo').innerText = "All link hierarchies conform correctly to semantic web protocols.";
    } else {
        lcpDot.className = "audit-status status-critical";
        document.getElementById('title-lcp').innerText = "Largest Contentful Paint (LCP) > 4.8 seconds";
        document.getElementById('desc-lcp').innerText = "Critical Suggestion: Compress payload parameters to next-gen formats.";
        
        seoDot.className = "audit-status status-warning";
        document.getElementById('title-seo').innerText = "Missing Canonical Link Metadata & Structured Markup";
        document.getElementById('desc-seo').innerText = "Mobile crawler failed to locate valid JSON-LD schema objects.";
    }
}

/**
 * Optimization Engine Logic (Master Quick Fix Action Trigger)
 */
function runMasterOptimizer() {
    alert("Running optimization cycles across target domain server assets...");
    
    // Artificial improvement execution block
    systemPresets[currentDevice].score = 98;
    systemPresets[currentDevice].seo = 100;
    systemPresets[currentDevice].performance = 98;
    systemPresets[currentDevice].security = 98;
    
    renderDiagnosticData();
    appendAiSystemMessage("Master Speed Optimization script injected successfully! Infrastructure components are now reporting peak performance metrics.");
}

/**
 * Contextual Fix Logic Flow Engine
 */
function fixIssue(issueKey) {
    const outputElement = document.getElementById('chatOutput');
    let codeTemplate = "";
    
    if (issueKey === 'lcp') {
        codeTemplate = `/* AI Asset Sizing Optimization Script */\nimg {\n  max-width: 100%;\n  height: auto;\n  content-visibility: auto;\n}`;
        appendAiSystemMessage("Here is the optimized CSS code snippet to fix your LCP/Image sizing issue. Copy and insert it into your platform theme header:\n\n" + codeTemplate);
    } else if (issueKey === 'seo') {
        codeTemplate = `<!-- Inject inside <head> element -->\n<link rel="canonical" href="${document.getElementById('targetUrl').value}" />\n<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "WebSite"\n}\n<\/script>`;
        appendAiSystemMessage("Missing Metadata Patch generated successfully:\n\n" + codeTemplate);
    } else if (issueKey === 'access') {
        codeTemplate = `<!-- Enhanced ARIA Accessibility Compliant Buttons -->\n<button aria-label="Analyze Current Website Profile">Execute</button>`;
        appendAiSystemMessage("Accessibility ARIA Labels code fix deployed:\n\n" + codeTemplate);
    } else if (issueKey === 'hsts') {
        codeTemplate = `# Secure Server Header Configuration Block\nStrict-Transport-Security: max-age=63072000; includeSubDomains; preload`;
        appendAiSystemMessage("HSTS Header Deployment Syntax:\n\n" + codeTemplate);
    }
}

/**
 * Settings Integration Node
 */
function updateBrandingTitle() {
    const inputVal = document.getElementById('brandingTitleInput').value;
    globalBrandingTitle = inputVal;
    document.getElementById('taglineBranding').innerText = inputVal;
}

/**
 * Premium PDF Report Generation Hook
 */
function downloadPdfReport() {
    const element = document.getElementById('reportRoot');
    const targetUrl = document.getElementById('targetUrl').value || "site";
    
    const options = {
        margin:       0.5,
        filename:     `Agha-AI-Audit-Report-${targetUrl.replace('https://','').replace('http://','')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    
    alert("Compiling rich visual interface analytics into premium PDF format...");
    html2pdf().set(options).from(element).save();
}

/**
 * AI Assistant Interface Logic Operations
 */
function sendMessageToAiAgent() {
    const inputEl = document.getElementById('chatInput');
    const userText = inputEl.value;
    if(!userText.trim()) return;
    
    // Render user bubble
    const container = document.getElementById('chatOutput');
    const userDiv = document.createElement('div');
    userDiv.className = "message user";
    userDiv.innerText = userText;
    container.appendChild(userDiv);
    
    inputEl.value = "";
    container.scrollTop = container.scrollHeight;
    
    // Generate AI context response
    setTimeout(() => {
        let aiReply = "I've analyzed your custom prompt. I recommend applying standard layout media queries to guarantee absolute responsiveness across viewports.";
        if(userText.toLowerCase().includes('code') || userText.toLowerCase().includes('image')) {
            aiReply = "Understood. Use this optimal responsive image design template:\n\nimg {\n  max-width: 100%;\n  height: auto;\n  aspect-ratio: attr(width) / attr(height);\n}";
        }
        appendAiSystemMessage(aiReply);
    }, 1000);
}

function appendAiSystemMessage(text) {
    const container = document.getElementById('chatOutput');
    const aiDiv = document.createElement('div');
    aiDiv.className = "message assistant";
    aiDiv.innerText = text;
    container.appendChild(aiDiv);
    container.scrollTop = container.scrollHeight;
}

function logout() {
    document.getElementById('loginPass').value = "";
    document.getElementById('loginGate').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loginGate').style.opacity = '1';
    }, 50);
      }
                            
