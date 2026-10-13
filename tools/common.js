'use strict';
window.ToolHelper = { whatsapp: message => 'https://wa.me/971585668337?text=' + encodeURIComponent(message), money: value => new Intl.NumberFormat('en-AE', {style:'currency',currency:'AED',maximumFractionDigits:0}).format(value) };
document.querySelectorAll('[data-wa]').forEach(a => { a.href = ToolHelper.whatsapp('[' + a.dataset.wa + '] Hi Eugene, I would like help with ' + a.textContent.replace(' ↗','') + '.'); a.target='_blank'; a.rel='noopener noreferrer'; });
document.querySelectorAll('.tool-nav a').forEach(a => { if (new URL(a.href).pathname === location.pathname) a.setAttribute('aria-current','page'); });
