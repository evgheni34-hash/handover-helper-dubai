'use strict';
const dictionary = {
  en: {
    brand: 'Handover Helper Dubai', language: 'Choose language', eyebrow: 'Dubai property · A clearer next step',
    hero: 'From keys to rental income — one checklist', intro: 'A practical starting point for your Dubai handover. Track the essentials, explore example costs, and get help where you need it.', start: 'Build your handover plan ↓', talk: 'Talk to Eugene ↗', byline: 'With Eugene Curocichin · Dubai real estate broker', artCaption: 'YOUR NEXT CHAPTER',
    checkEyebrow: '01 / Your roadmap', checkTitle: 'Ten steps. One place.', checkIntro: 'Work through these at your own pace. Requirements depend on your property, developer and intended use.', saved: 'Saved on this device', progressLabel: 'Checklist completion', progressText: '{done} of 10 steps complete', help: 'Get help ↗',
    estimateEyebrow: '02 / Plan ahead', estimateTitle: 'Explore a sample budget', estimateWarning: 'Indicative example ranges only — not real quotes, ask for quote.', size: 'Unit size (sq ft)', level: 'Furnishing level', levels: ['None', 'Basic', 'Mid', 'Premium'], costLabels: ['Snagging', 'Furnishing', 'Moving / utility setup', 'Insurance'], currency: 'AED', sizeError: 'Enter a unit size between 1 and 100,000 sq ft.', estimateBasis: 'Illustrative assumptions invented for this tool, not market prices: snagging 0.8–1.5 AED/sq ft (minimum 600–1,000); furnishing 0, 25–45, 50–85 or 100–160 AED/sq ft; moving/setup 1,500–4,000 plus 0.5–1.5 AED/sq ft; annual insurance 500–1,500 plus 0.1–0.3 AED/sq ft. Deposits, scope, provider and property details can change a quote. No DLD, permit, fit-out or mortgage fees are included.',
    calculatorEyebrow: 'Another planning tool', calculatorTitle: 'Review your off-plan numbers', calculatorIntro: 'Open the off-plan assignment ledger calculator in a new tab to explore your own scenario.', calculatorLink: 'Open calculator ↗',
    contactEyebrow: '03 / Make a connection', contactTitle: 'Your property. Your next step.', contactIntro: 'Share your project and the help you need. Your enquiry opens in WhatsApp, ready for you to review and send.', brokerName: 'Eugene Curocichin', brokerRole: 'Dubai real estate broker', name: 'Your name', project: 'Project / building', month: 'Expected handover month', services: 'Services needed (select at least one)', send: 'Prepare WhatsApp enquiry ↗', privacy: 'No backend or form submission here. These details are only added to your WhatsApp message; send it there when ready.', formError: 'Enter your name, project, a valid handover month, and select at least one service.', disclaimer: 'Mortgage help is provided through licensed partners. Eugene may receive referral fees from partners; any applicable fees will be disclosed. This site provides general information and illustrative examples, not financial or legal advice. Confirm requirements and costs with the relevant authority, developer or licensed professional.', footerNote: 'Your checklist and language choice are stored in this browser only. If browser storage is unavailable, they last for this visit.', generalMessage: 'Hi Eugene, I would like help planning my Dubai property handover.', helpMessage: 'Hi Eugene, I would like help with this handover step: {step}.', leadMessage: 'Hi Eugene, I would like help with my Dubai property handover.', messageName: 'Name', messageProject: 'Project / building', messageMonth: 'Handover month', messageServices: 'Services needed',
    steps: [
      ['Pre-handover payments & DLD / Oqood', 'Reconcile the developer’s statement and confirm applicable DLD / Oqood registration and payment requirements before handover.'],
      ['Title deed', 'Confirm the title deed process, required documents and timing with your developer and the relevant authority.'],
      ['Snagging inspection', 'Consider an independent inspection and a written defect list. Agree access, repair timelines and follow-up with the developer.'],
      ['DEWA, chiller & internet move-in', 'Check account activation, deposits and building-specific cooling and internet arrangements before moving in.'],
      ['Fit-out or design', 'Define your scope and budget. Confirm building approvals, permits and contractor requirements before starting work.'],
      ['Furnishing', 'Plan around your intended tenant or guest, room sizes and delivery access. Request itemised quotes and lead times.'],
      ['Insurance', 'Ask a licensed provider about suitable cover, exclusions and responsibilities for your property and rental use.'],
      ['Long-term or holiday-home rental', 'Compare long-term letting with Ejari against holiday-home use with a DTCM permit. Confirm current eligibility, rules and approvals before choosing.'],
      ['Property management', 'Compare management scope, fees, reporting and maintenance arrangements. Clarify who handles tenants or guests and compliance.'],
      ['Refinance / mortgage review', 'A licensed partner can review eligibility, affordability and costs. Any offer depends on lender assessment; approval or savings are not guaranteed.']
    ]
  },
  ru: {
    brand: 'Помощник по передаче жилья · Дубай', language: 'Выбрать язык', eyebrow: 'Недвижимость Дубая · Следующий шаг', hero: 'От ключей до дохода от аренды — один чек-лист', intro: 'Отправная точка для приёмки недвижимости в Дубае. Отмечайте важные этапы, изучайте примерные расходы и получайте помощь.', start: 'Составить план приёмки ↓', talk: 'Связаться с Евгением ↗', byline: 'Евгений Курочихин · Брокер по недвижимости в Дубае', artCaption: 'НОВАЯ ГЛАВА',
    checkEyebrow: '01 / Ваш план', checkTitle: 'Десять шагов в одном месте.', checkIntro: 'Проходите этапы в удобном темпе. Требования зависят от объекта, застройщика и планируемого использования.', saved: 'Сохранено на этом устройстве', progressLabel: 'Выполнение чек-листа', progressText: 'Выполнено {done} из 10 шагов', help: 'Получить помощь ↗',
    estimateEyebrow: '02 / Планирование', estimateTitle: 'Пример бюджета', estimateWarning: 'Только ориентировочные примерные диапазоны — это не реальные предложения. Запросите индивидуальный расчёт.', size: 'Площадь (кв. футы)', level: 'Уровень меблировки', levels: ['Без мебели', 'Базовый', 'Средний', 'Премиум'], costLabels: ['Инспекция дефектов', 'Меблировка', 'Переезд / подключение услуг', 'Страхование'], currency: 'AED', sizeError: 'Укажите площадь от 1 до 100 000 кв. футов.', estimateBasis: 'Условные допущения для этого инструмента, а не рыночные цены: инспекция 0,8–1,5 AED/кв. фут (минимум 600–1 000); мебель 0, 25–45, 50–85 или 100–160 AED/кв. фут; переезд/подключение 1 500–4 000 плюс 0,5–1,5 AED/кв. фут; годовое страхование 500–1 500 плюс 0,1–0,3 AED/кв. фут. Депозиты, объём работ, поставщик и особенности объекта влияют на расчёт. Сборы DLD, разрешения, ремонт и ипотечные расходы не включены.',
    calculatorEyebrow: 'Ещё один инструмент', calculatorTitle: 'Проверьте расчёты по off-plan', calculatorIntro: 'Откройте калькулятор переуступки off-plan в новой вкладке и рассмотрите свой сценарий.', calculatorLink: 'Открыть калькулятор ↗',
    contactEyebrow: '03 / Связаться', contactTitle: 'Ваш объект. Ваш следующий шаг.', contactIntro: 'Укажите проект и нужные услуги. Заявка откроется в WhatsApp: проверьте сообщение и отправьте его самостоятельно.', brokerName: 'Евгений Курочихин', brokerRole: 'Брокер по недвижимости в Дубае', name: 'Ваше имя', project: 'Проект / здание', month: 'Ожидаемый месяц передачи', services: 'Нужные услуги (выберите хотя бы одну)', send: 'Подготовить заявку в WhatsApp ↗', privacy: 'Данные не отправляются на сервер. Они добавляются только в сообщение WhatsApp, которое вы отправите самостоятельно.', formError: 'Укажите имя, проект, корректный месяц передачи и выберите хотя бы одну услугу.', disclaimer: 'Помощь с ипотекой предоставляется через лицензированных партнёров. Евгений может получать от партнёров вознаграждение за направление клиентов; применимое вознаграждение будет раскрыто. На сайте представлена общая информация и условные примеры, а не финансовые или юридические рекомендации. Уточняйте требования и расходы у соответствующего органа, застройщика или лицензированного специалиста.', footerNote: 'Чек-лист и выбор языка хранятся только в этом браузере. Если хранение недоступно, настройки действуют только в течение посещения.', generalMessage: 'Здравствуйте, Евгений! Нужна помощь с планированием приёмки недвижимости в Дубае.', helpMessage: 'Здравствуйте, Евгений! Нужна помощь с этапом приёмки: {step}.', leadMessage: 'Здравствуйте, Евгений! Нужна помощь с приёмкой недвижимости в Дубае.', messageName: 'Имя', messageProject: 'Проект / здание', messageMonth: 'Месяц передачи', messageServices: 'Нужные услуги',
    steps: [
      ['Платежи перед передачей и DLD / Oqood', 'Сверьте расчёты с застройщиком и уточните применимые требования к регистрации и платежам DLD / Oqood до передачи объекта.'],
      ['Свидетельство о собственности', 'Уточните порядок получения title deed, необходимые документы и сроки у застройщика и соответствующего органа.'],
      ['Инспекция дефектов', 'Рассмотрите независимую инспекцию и письменный список дефектов. Согласуйте доступ, сроки устранения и повторную проверку с застройщиком.'],
      ['DEWA, охлаждение и интернет', 'До переезда уточните подключение услуг, депозиты, особенности охлаждения здания и доступных интернет-провайдеров.'],
      ['Ремонт или дизайн', 'Определите объём работ и бюджет. До начала работ уточните согласования с администрацией здания, разрешения и требования к подрядчикам.'],
      ['Меблировка', 'Учитывайте будущего арендатора или гостя, размеры комнат и доступ для доставки. Запросите подробные сметы и сроки.'],
      ['Страхование', 'Обсудите с лицензированным поставщиком подходящее покрытие, исключения и ответственность с учётом объекта и типа аренды.'],
      ['Долгосрочная или краткосрочная аренда', 'Сравните долгосрочную аренду с Ejari и аренду holiday-home с разрешением DTCM. До выбора уточните актуальные условия, правила и согласования.'],
      ['Управление недвижимостью', 'Сравните услуги, тарифы, отчётность и обслуживание. Уточните, кто отвечает за арендаторов или гостей и соблюдение требований.'],
      ['Рефинансирование / проверка ипотеки', 'Лицензированный партнёр может оценить доступность, платёжную нагрузку и расходы. Решение зависит от банка; одобрение или экономия не гарантируются.']
    ]
  }
};
const storage = { get(key) { try { return localStorage.getItem(key); } catch { return null; } }, set(key, value) { try { localStorage.setItem(key, value); } catch { /* Keep the page usable without storage. */ } } };
let language = storage.get('handover-language') === 'ru' ? 'ru' : 'en';
let completed = Array(10).fill(false);
try { const saved = JSON.parse(storage.get('handover-progress')); if (Array.isArray(saved) && saved.length === 10) completed = saved.map(value => value === true); } catch { /* Ignore invalid stored data. */ }
const selectedServices = new Set();
const whatsapp = message => 'https://wa.me/971585668337?text=' + encodeURIComponent(message);
const $ = id => document.getElementById(id);
function updateProgress() {
  const done = completed.filter(Boolean).length;
  $('progress-text').textContent = dictionary[language].progressText.replace('{done}', done);
  $('progress').setAttribute('aria-valuenow', done);
  $('progress-fill').style.width = `${done * 10}%`;
}
function updateEstimate() {
  const t = dictionary[language];
  const size = Number($('size').value);
  const valid = $('size').value.trim() !== '' && Number.isFinite(size) && size >= 1 && size <= 100000;
  $('size').setAttribute('aria-invalid', String(!valid));
  $('estimate-error').textContent = valid ? '' : t.sizeError;
  $('estimate-results').replaceChildren();
  if (!valid) return;
  const furniture = [[0, 0], [25, 45], [50, 85], [100, 160]][Number($('level').value)];
  const ranges = [[Math.max(600, size * .8), Math.max(1000, size * 1.5)], furniture.map(rate => size * rate), [1500 + size * .5, 4000 + size * 1.5], [500 + size * .1, 1500 + size * .3]];
  const format = new Intl.NumberFormat(language === 'ru' ? 'ru-RU' : 'en-AE', { maximumFractionDigits: 0 });
  ranges.forEach((range, index) => {
    const row = document.createElement('div');
    const term = document.createElement('dt'); term.textContent = t.costLabels[index];
    const value = document.createElement('dd'); value.textContent = `${format.format(Math.round(range[0]))}–${format.format(Math.round(range[1]))} ${t.currency}`;
    row.append(term, value); $('estimate-results').append(row);
  });
}
function render() {
  const t = dictionary[language];
  document.documentElement.lang = language;
  document.title = t.brand;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll('[data-aria]').forEach(el => { el.setAttribute('aria-label', t[el.dataset.aria]); });
  document.querySelectorAll('[data-lang]').forEach(el => { el.setAttribute('aria-pressed', String(el.dataset.lang === language)); });
  $('hero-whatsapp').href = whatsapp(t.generalMessage);
  const level = $('level').value || '0';
  $('level').replaceChildren(...t.levels.map((label, index) => new Option(label, String(index)))); $('level').value = level;
  $('steps').replaceChildren(); $('service-options').replaceChildren();
  t.steps.forEach(([title, explanation], index) => {
    const article = document.createElement('article'); article.className = 'step' + (completed[index] ? ' is-done' : '');
    const check = document.createElement('input'); check.type = 'checkbox'; check.id = `step-${index}`; check.checked = completed[index]; check.setAttribute('aria-labelledby', `step-title-${index}`);
    check.addEventListener('change', () => { completed[index] = check.checked; article.classList.toggle('is-done', check.checked); storage.set('handover-progress', JSON.stringify(completed)); updateProgress(); });
    const body = document.createElement('div'); const heading = document.createElement('h3'); heading.id = `step-title-${index}`;
    const number = document.createElement('span'); number.className = 'number'; number.textContent = String(index + 1).padStart(2, '0'); number.setAttribute('aria-hidden', 'true');
    const label = document.createElement('label'); label.htmlFor = check.id; label.style.display = 'inline'; label.style.fontSize = 'inherit'; label.textContent = title;
    heading.append(number, label);
    const copy = document.createElement('p'); copy.textContent = explanation;
    const help = document.createElement('a'); help.className = 'help'; help.textContent = t.help; help.href = whatsapp(t.helpMessage.replace('{step}', title)); help.target = '_blank'; help.rel = 'noopener noreferrer'; help.setAttribute('aria-label', `${t.help} · ${title}`);
    body.append(heading, copy, help); article.append(check, body); $('steps').append(article);
    const serviceLabel = document.createElement('label'); const serviceCheck = document.createElement('input'); serviceCheck.type = 'checkbox'; serviceCheck.name = 'services'; serviceCheck.value = String(index); serviceCheck.checked = selectedServices.has(index);
    serviceCheck.addEventListener('change', () => { if (serviceCheck.checked) selectedServices.add(index); else selectedServices.delete(index); });
    serviceLabel.append(serviceCheck, document.createTextNode(title)); $('service-options').append(serviceLabel);
  });
  if ($('form-error').textContent) $('form-error').textContent = t.formError;
  updateProgress(); updateEstimate();
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => { language = button.dataset.lang; storage.set('handover-language', language); render(); }));
$('size').addEventListener('input', updateEstimate);
$('level').addEventListener('change', updateEstimate);
$('lead-form').addEventListener('submit', event => {
  event.preventDefault();
  const t = dictionary[language];
  const name = $('name').value.trim(), project = $('project').value.trim(), month = $('month').value;
  const monthValid = /^\d{4}-(0[1-9]|1[0-2])$/.test(month) && Number(month.slice(0, 4)) > 0;
  [['name', !!name], ['project', !!project], ['month', monthValid]].forEach(([id, valid]) => $(id).setAttribute('aria-invalid', String(!valid)));
  if (!name || !project || !monthValid || !selectedServices.size) {
    $('form-error').textContent = t.formError;
    const invalid = $('lead-form').querySelector('[aria-invalid="true"]') || $('service-options').querySelector('input'); invalid.focus(); return;
  }
  $('form-error').textContent = '';
  const message = `${t.leadMessage}\n\n${t.messageName}: ${name}\n${t.messageProject}: ${project}\n${t.messageMonth}: ${month}\n${t.messageServices}:\n${[...selectedServices].sort((a, b) => a - b).map(index => '• ' + t.steps[index][0]).join('\n')}`;
  window.location.assign(whatsapp(message));
});
render();
