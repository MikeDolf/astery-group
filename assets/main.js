// Astery Group — калькулятор и демо-форма заявки

(function () {
  // Ориентировочные ставки для калькулятора (эконом-сегмент, ₽).
  // Это не прайс-лист партнёров — только грубая оценка "от", точная цена всегда после бесплатного замера.
  const CATEGORIES = {
    shkaf: { label: 'Шкаф-купе', unit: 'pogm', rate: 13500, min: 16000, dim: 'Ширина, м', dimMin: 0.6, dimMax: 4, dimStep: 0.1, dimDefault: 2 },
    vstroenny: { label: 'Встроенный шкаф', unit: 'pogm', rate: 11500, min: 14000, dim: 'Ширина, м', dimMin: 0.6, dimMax: 4, dimStep: 0.1, dimDefault: 2 },
    kuhnya: { label: 'Кухня', unit: 'pogm', rate: 27000, min: 45000, dim: 'Длина гарнитура, м', dimMin: 1.5, dimMax: 8, dimStep: 0.1, dimDefault: 3 },
    garderobnaya: { label: 'Гардеробная', unit: 'sqm', rate: 19500, min: 55000, dim: 'Площадь, м²', dimMin: 1, dimMax: 15, dimStep: 0.5, dimDefault: 3 },
    prihozhaya: { label: 'Прихожая', unit: 'pogm', rate: 15500, min: 20000, dim: 'Ширина, м', dimMin: 1, dimMax: 5, dimStep: 0.1, dimDefault: 2.2 },
    vannaya: { label: 'Мебель для ванной', unit: 'pogm', rate: 21000, min: 13000, dim: 'Ширина, м', dimMin: 0.4, dimMax: 3, dimStep: 0.1, dimDefault: 1 },
  };

  const MATERIAL_MULT = { econom: 1, standard: 1.3, premium: 1.75 };

  const catSelect = document.getElementById('calcCategory');
  const dimInput = document.getElementById('calcDim');
  const dimLabel = document.getElementById('calcDimLabel');
  const materialSelect = document.getElementById('calcMaterial');
  const priceOut = document.getElementById('calcPrice');
  const noteOut = document.getElementById('calcNote');
  const errorOut = document.getElementById('calcError');

  function fmt(n) {
    return new Intl.NumberFormat('ru-RU').format(Math.round(n / 100) * 100) + ' ₽';
  }

  function validateDim(cat) {
    const raw = dimInput.value.trim();
    if (raw === '') return { valid: false, message: 'Укажите размер' };
    const dim = parseFloat(raw);
    if (isNaN(dim) || dim <= 0) return { valid: false, message: 'Размер должен быть больше нуля' };
    if (dim < cat.dimMin || dim > cat.dimMax) {
      return { valid: false, message: 'Допустимый диапазон: ' + cat.dimMin + '–' + cat.dimMax + ' м' };
    }
    return { valid: true, dim: dim };
  }

  function recalc() {
    if (!catSelect) return;
    const cat = CATEGORIES[catSelect.value];
    const check = validateDim(cat);

    if (!check.valid) {
      dimInput.setAttribute('aria-invalid', 'true');
      errorOut.textContent = check.message;
      errorOut.hidden = false;
      priceOut.textContent = '—';
      noteOut.textContent = 'Исправьте размер, чтобы увидеть ориентировочную цену.';
      return;
    }

    dimInput.removeAttribute('aria-invalid');
    errorOut.hidden = true;
    errorOut.textContent = '';

    const mult = MATERIAL_MULT[materialSelect.value] || 1;
    const raw = check.dim * cat.rate * mult;
    const price = Math.max(raw, cat.min * mult);
    priceOut.textContent = 'от ' + fmt(price);
    noteOut.textContent = cat.unit === 'sqm'
      ? 'Ориентировочно, по площади. Точная цена — после бесплатного замера.'
      : 'Ориентировочно, за погонный метр. Точная цена — после бесплатного замера.';
  }

  function updateDimBounds() {
    const cat = CATEGORIES[catSelect.value];
    dimLabel.textContent = cat.dim;
    dimInput.min = cat.dimMin;
    dimInput.max = cat.dimMax;
    dimInput.step = cat.dimStep;
    dimInput.value = cat.dimDefault;
    recalc();
  }

  if (catSelect) {
    catSelect.addEventListener('change', updateDimBounds);
    dimInput.addEventListener('input', recalc);
    materialSelect.addEventListener('change', recalc);
    updateDimBounds();
  }

  // FAQ accordion — max-height is measured from real content, never a guessed constant,
  // so a longer answer never gets silently clipped.
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var panel = item.querySelector('.faq-a');
    item.querySelector('.faq-q').addEventListener('click', function () {
      var isOpen = item.classList.toggle('open');
      panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : '0px';
    });
    if (item.classList.contains('open')) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('.faq-item.open .faq-a').forEach(function (panel) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });

  // Demo lead form — no backend yet, just shows a confirmation.
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('leadFields').style.display = 'none';
      document.getElementById('leadSuccess').classList.add('show');
    });
  }

  // Mobile nav toggle
  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();
