/**
 * js/login-scene.js
 * NegoSim — HUD Dashboard Card (inline SVG + CSS 3D + animations)
 * Decorative negotiation-themed illustration for the login page.
 *
 * Features:
 *  - Frosted-glass HUD card with perspective tilt
 *  - Animated gauge arc, pulsing center dot
 *  - Ticking numerals
 *  - Chart shimmer effect
 *  - Mouse parallax (disabled on touch)
 *  - Visibility-aware (pauses when tab hidden)
 *  - prefers-reduced-motion compliant
 */
(() => {
  'use strict';

  const scene = document.getElementById('hud-scene');
  const wrapper = document.getElementById('hud-card-wrapper');
  if (!scene || !wrapper) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // ── Build the SVG ──
  const NS = 'http://www.w3.org/2000/svg';

  function el(tag, attrs = {}, parent = null) {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
      e.setAttribute(k, v);
    }
    if (parent) parent.appendChild(e);
    return e;
  }

  function textEl(tag, attrs, content, parent) {
    const e = el(tag, attrs, parent);
    e.textContent = content;
    return e;
  }

  const W = 580, H = 435;
  const svg = el('svg', {
    viewBox: `0 0 ${W} ${H}`,
    xmlns: NS,
    fill: 'none',
    role: 'img',
    'aria-hidden': 'true',
  });

  // ── Defs: filters, gradients, patterns ──
  const defs = el('defs', {}, svg);

  // Glass blur filter
  const filterGlass = el('filter', { id: 'hud-glass', x: '-5%', y: '-5%', width: '110%', height: '110%' }, defs);
  el('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '0.5' }, filterGlass);

  // Mint gradient for chart
  const gradChart = el('linearGradient', { id: 'hud-chart-grad', x1: '0', y1: '0', x2: '0', y2: '1' }, defs);
  el('stop', { offset: '0%', 'stop-color': '#78D2AA', 'stop-opacity': '0.5' }, gradChart);
  el('stop', { offset: '100%', 'stop-color': '#78D2AA', 'stop-opacity': '0.05' }, gradChart);

  // Accent gradient for gauge arc
  const gradGauge = el('linearGradient', { id: 'hud-gauge-grad', x1: '0', y1: '0', x2: '1', y2: '1' }, defs);
  el('stop', { offset: '0%', 'stop-color': '#165C47' }, gradGauge);
  el('stop', { offset: '100%', 'stop-color': '#78D2AA' }, gradGauge);

  // Shimmer gradient
  const gradShimmer = el('linearGradient', { id: 'hud-shimmer', x1: '0', y1: '0', x2: '1', y2: '0' }, defs);
  el('stop', { offset: '0%', 'stop-color': '#fff', 'stop-opacity': '0' }, gradShimmer);
  el('stop', { offset: '40%', 'stop-color': '#fff', 'stop-opacity': '0.12' }, gradShimmer);
  el('stop', { offset: '60%', 'stop-color': '#fff', 'stop-opacity': '0.12' }, gradShimmer);
  el('stop', { offset: '100%', 'stop-color': '#fff', 'stop-opacity': '0' }, gradShimmer);

  // Hatch pattern for label
  const patHatch = el('pattern', { id: 'hud-hatch', width: '6', height: '6', patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(-45)' }, defs);
  el('rect', { width: '6', height: '6', fill: 'rgba(255,255,255,0.06)' }, patHatch);
  el('line', { x1: '0', y1: '0', x2: '0', y2: '6', stroke: 'rgba(22,92,71,0.10)', 'stroke-width': '1.5' }, patHatch);

  // Clip for card chamfered corners
  const clipCard = el('clipPath', { id: 'hud-clip' }, defs);
  el('path', { d: `M 20 0 L ${W-20} 0 L ${W} 20 L ${W} ${H-20} L ${W-20} ${H} L 20 ${H} L 0 ${H-20} L 0 20 Z` }, clipCard);

  // ── Card body ──
  const cardBody = el('g', { 'clip-path': 'url(#hud-clip)' }, svg);

  // Background
  el('rect', { x: '0', y: '0', width: W, height: H, fill: 'rgba(255,255,255,0.14)', rx: '0' }, cardBody);
  // Glass border
  el('path', {
    d: `M 20 0 L ${W-20} 0 L ${W} 20 L ${W} ${H-20} L ${W-20} ${H} L 20 ${H} L 0 ${H-20} L 0 20 Z`,
    fill: 'none', stroke: 'rgba(255,255,255,0.45)', 'stroke-width': '1.5',
  }, svg);

  // ── Top progress bar ──
  el('rect', { x: '0', y: '0', width: W, height: '3', fill: 'rgba(22,92,71,0.15)' }, cardBody);
  el('rect', { x: '0', y: '0', width: W * 0.65, height: '3', fill: '#165C47', rx: '0', opacity: '0.7' }, cardBody);

  // ── Header row ──
  // Logo tile
  const logoG = el('g', { transform: 'translate(24, 20)' }, cardBody);
  el('rect', { x: '0', y: '0', width: '28', height: '28', rx: '6', fill: '#165C47' }, logoG);
  textEl('text', { x: '14', y: '20', fill: '#fff', 'font-size': '16', 'font-weight': '700', 'text-anchor': 'middle', 'font-family': 'Outfit, sans-serif' }, 'N', logoG);

  textEl('text', { x: '62', y: '40', fill: 'rgba(16,31,26,0.7)', 'font-size': '15', 'font-weight': '600', 'font-family': 'Outfit, sans-serif' }, 'NegoSim', cardBody);

  // Corner icon (small dot grid)
  const cornerG = el('g', { transform: `translate(${W - 48}, 22)` }, cardBody);
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      el('circle', { cx: c * 7, cy: r * 7, r: '1.5', fill: 'rgba(22,92,71,0.25)' }, cornerG);
    }
  }

  // ── "Negotiation Overview" label with hatch ──
  const labelG = el('g', { transform: 'translate(24, 62)' }, cardBody);
  el('rect', { x: '0', y: '0', width: '200', height: '24', rx: '3', fill: 'url(#hud-hatch)' }, labelG);
  el('rect', { x: '0', y: '0', width: '200', height: '24', rx: '3', fill: 'none', stroke: 'rgba(22,92,71,0.12)', 'stroke-width': '0.5' }, labelG);
  textEl('text', { x: '10', y: '16', fill: 'rgba(22,92,71,0.55)', 'font-size': '10', 'font-weight': '600', 'letter-spacing': '0.08em', 'text-transform': 'uppercase', 'font-family': 'Outfit, sans-serif' }, 'NEGOTIATION OVERVIEW', labelG);

  // ── Big digital numerals ──
  const numStyle = {
    'font-family': 'Outfit, sans-serif',
    'font-weight': '700',
    'font-style': 'italic',
    'font-variant-numeric': 'tabular-nums',
  };

  // "124" Deals Closed
  const num1 = textEl('text', {
    x: '40', y: '135', fill: 'rgba(16,31,26,0.75)', 'font-size': '52', ...numStyle,
    id: 'hud-num-deals',
  }, '124', cardBody);

  textEl('text', {
    x: '40', y: '155', fill: 'rgba(22,92,71,0.4)', 'font-size': '10', 'font-weight': '500', 'letter-spacing': '0.06em', 'font-family': 'Outfit, sans-serif',
  }, 'DEALS CLOSED', cardBody);

  // "4203" Offers Exchanged
  const num2 = textEl('text', {
    x: '200', y: '135', fill: 'rgba(16,31,26,0.75)', 'font-size': '52', ...numStyle,
    id: 'hud-num-offers',
  }, '4203', cardBody);

  textEl('text', {
    x: '200', y: '155', fill: 'rgba(22,92,71,0.4)', 'font-size': '10', 'font-weight': '500', 'letter-spacing': '0.06em', 'font-family': 'Outfit, sans-serif',
  }, 'OFFERS EXCHANGED', cardBody);

  // ── Chart area (Offer vs Counter-offer lines converging) ──
  const chartG = el('g', { transform: 'translate(24, 175)' }, cardBody);
  const chartW = 380, chartH = 130;

  // Area fill (stepped polygon shape)
  const areaPath = `M 0 ${chartH} L 0 100 L 40 85 L 80 90 L 120 70 L 160 60 L 200 55 L 240 40 L 280 30 L 320 20 L 360 15 L ${chartW} 12 L ${chartW} ${chartH} Z`;
  el('path', {
    d: areaPath, fill: 'url(#hud-chart-grad)', opacity: '0.7',
  }, chartG);

  // Offer line (upper)
  const offerLine = `M 0 100 L 40 85 L 80 90 L 120 70 L 160 60 L 200 55 L 240 40 L 280 30 L 320 20 L 360 15 L ${chartW} 12`;
  el('path', {
    d: offerLine, fill: 'none', stroke: '#165C47', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: '0.7',
    id: 'hud-offer-line',
  }, chartG);

  // Counter-offer line (lower, converging)
  const counterLine = `M 0 30 L 40 45 L 80 40 L 120 55 L 160 50 L 200 45 L 240 35 L 280 28 L 320 19 L 360 15 L ${chartW} 12`;
  el('path', {
    d: counterLine, fill: 'none', stroke: '#78D2AA', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-dasharray': '6 4', opacity: '0.6',
    id: 'hud-counter-line',
  }, chartG);

  // Node dots on offer line
  const offerDots = [[0,100],[80,90],[160,60],[240,40],[320,20],[chartW,12]];
  offerDots.forEach(([cx, cy]) => {
    el('circle', { cx, cy, r: '3', fill: '#165C47', opacity: '0.6' }, chartG);
  });

  // Agreement point (where lines meet)
  el('circle', { cx: chartW, cy: '12', r: '5', fill: '#165C47', stroke: '#78D2AA', 'stroke-width': '2' }, chartG);
  textEl('text', {
    x: chartW - 5, y: 6, fill: 'rgba(22,92,71,0.5)', 'font-size': '8', 'font-weight': '600', 'text-anchor': 'end', 'font-family': 'Outfit, sans-serif',
  }, 'AGREEMENT', chartG);

  // Shimmer overlay for chart
  const shimmer = el('rect', {
    x: '-100', y: '0', width: '100', height: chartH,
    fill: 'url(#hud-shimmer)', opacity: '0.8',
    id: 'hud-chart-shimmer',
  }, chartG);

  // ── Radial gauge (bottom-right) ──
  const gaugeG = el('g', { transform: `translate(${W - 110}, ${H - 120})` }, cardBody);
  const gR = 42;

  // Concentric rings
  el('circle', { cx: '0', cy: '0', r: gR, fill: 'none', stroke: 'rgba(22,92,71,0.08)', 'stroke-width': '1' }, gaugeG);
  el('circle', { cx: '0', cy: '0', r: gR * 0.72, fill: 'none', stroke: 'rgba(22,92,71,0.06)', 'stroke-width': '0.5' }, gaugeG);
  el('circle', { cx: '0', cy: '0', r: gR * 0.4, fill: 'none', stroke: 'rgba(22,92,71,0.05)', 'stroke-width': '0.5' }, gaugeG);

  // Crosshair
  el('line', { x1: -gR, y1: '0', x2: gR, y2: '0', stroke: 'rgba(22,92,71,0.06)', 'stroke-width': '0.5' }, gaugeG);
  el('line', { x1: '0', y1: -gR, x2: '0', y2: gR, stroke: 'rgba(22,92,71,0.06)', 'stroke-width': '0.5' }, gaugeG);

  // Rotating arc
  const arcLen = Math.PI * gR * 0.75; // 75% of circumference drawn
  const gaugeArc = el('circle', {
    cx: '0', cy: '0', r: gR * 0.88,
    fill: 'none', stroke: 'url(#hud-gauge-grad)', 'stroke-width': '3.5',
    'stroke-dasharray': `${arcLen * 0.6} ${arcLen * 0.4}`,
    'stroke-linecap': 'round', opacity: '0.8',
    id: 'hud-gauge-arc',
  }, gaugeG);

  // Center dot (pulsing)
  const gaugeDot = el('circle', {
    cx: '0', cy: '0', r: '3.5',
    fill: '#165C47', id: 'hud-gauge-dot',
  }, gaugeG);

  // Label
  textEl('text', {
    x: '0', y: gR + 16, fill: 'rgba(22,92,71,0.45)', 'font-size': '9', 'font-weight': '600', 'text-anchor': 'middle', 'letter-spacing': '0.06em', 'font-family': 'Outfit, sans-serif',
  }, 'AGREEMENT', gaugeG);

  // ── Tab labels R1–R7 (rounds) ──
  const tabsG = el('g', { transform: `translate(24, ${H - 50})` }, cardBody);
  for (let i = 1; i <= 7; i++) {
    const tx = (i - 1) * 38;
    el('rect', { x: tx, y: '0', width: '30', height: '16', rx: '3', fill: i === 7 ? 'rgba(22,92,71,0.15)' : 'rgba(22,92,71,0.06)' }, tabsG);
    textEl('text', {
      x: tx + 15, y: '12', fill: i === 7 ? 'rgba(22,92,71,0.7)' : 'rgba(22,92,71,0.35)',
      'font-size': '9', 'font-weight': '600', 'text-anchor': 'middle', 'font-family': 'Outfit, sans-serif',
    }, `R${i}`, tabsG);
  }

  // ── Bottom-left badge "Round 07" ──
  const badgeG = el('g', { transform: `translate(24, ${H - 24})` }, cardBody);
  el('rect', { x: '0', y: '0', width: '72', height: '18', rx: '3', fill: 'rgba(22,92,71,0.12)' }, badgeG);
  // Arrow
  el('path', { d: 'M 6 6 L 12 9 L 6 12', fill: 'none', stroke: '#165C47', 'stroke-width': '1.2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: '0.6' }, badgeG);
  textEl('text', { x: '20', y: '13', fill: 'rgba(22,92,71,0.55)', 'font-size': '9', 'font-weight': '600', 'font-family': 'Outfit, sans-serif' }, 'Round 07', badgeG);

  // ── Ruler ticks along bottom ──
  const rulerG = el('g', { transform: `translate(110, ${H - 12})` }, cardBody);
  for (let i = 0; i < 30; i++) {
    const tx = i * 10;
    const isMajor = i % 5 === 0;
    el('line', {
      x1: tx, y1: '0', x2: tx, y2: isMajor ? '8' : '4',
      stroke: 'rgba(22,92,71,0.12)', 'stroke-width': isMajor ? '1' : '0.5',
    }, rulerG);
  }

  // ── Dotted corner brackets ──
  const bLen = 20;
  const bOff = 8;
  // Top-left
  el('path', { d: `M ${bOff} ${bOff + bLen} L ${bOff} ${bOff} L ${bOff + bLen} ${bOff}`, fill: 'none', stroke: 'rgba(22,92,71,0.15)', 'stroke-width': '1', 'stroke-dasharray': '3 3', 'stroke-linecap': 'round' }, cardBody);
  // Top-right
  el('path', { d: `M ${W - bOff - bLen} ${bOff} L ${W - bOff} ${bOff} L ${W - bOff} ${bOff + bLen}`, fill: 'none', stroke: 'rgba(22,92,71,0.15)', 'stroke-width': '1', 'stroke-dasharray': '3 3', 'stroke-linecap': 'round' }, cardBody);
  // Bottom-left
  el('path', { d: `M ${bOff} ${H - bOff - bLen} L ${bOff} ${H - bOff} L ${bOff + bLen} ${H - bOff}`, fill: 'none', stroke: 'rgba(22,92,71,0.15)', 'stroke-width': '1', 'stroke-dasharray': '3 3', 'stroke-linecap': 'round' }, cardBody);
  // Bottom-right
  el('path', { d: `M ${W - bOff - bLen} ${H - bOff} L ${W - bOff} ${H - bOff} L ${W - bOff} ${H - bOff - bLen}`, fill: 'none', stroke: 'rgba(22,92,71,0.15)', 'stroke-width': '1', 'stroke-dasharray': '3 3', 'stroke-linecap': 'round' }, cardBody);

  // ── Toggle switch (decorative, bottom area) ──
  const toggleG = el('g', { transform: `translate(${W - 180}, ${H - 26})` }, cardBody);
  el('rect', { x: '0', y: '0', width: '26', height: '14', rx: '7', fill: 'rgba(22,92,71,0.12)' }, toggleG);
  el('circle', { cx: '18', cy: '7', r: '5', fill: '#165C47', opacity: '0.5' }, toggleG);

  // ── Insert the SVG ──
  const cardEl = document.getElementById('hud-card');
  if (cardEl) cardEl.appendChild(svg);

  // ── Build connector pills ──
  const connContainer = document.getElementById('hud-connectors');
  if (connContainer) {
    for (let i = 0; i < 7; i++) {
      const pill = document.createElement('div');
      pill.className = 'hud-connector-pill';
      connContainer.appendChild(pill);
    }
  }

  // ══════════════════════════════════════════════════════════════
  //  ANIMATIONS
  // ══════════════════════════════════════════════════════════════
  let rafId = null;
  let paused = false;
  let time = 0;

  // References
  const numDeals = document.getElementById('hud-num-deals');
  const numOffers = document.getElementById('hud-num-offers');
  const chartShimmer = document.getElementById('hud-chart-shimmer');
  const arcEl = document.getElementById('hud-gauge-arc');
  const dotEl = document.getElementById('hud-gauge-dot');

  // Numeral tick state
  let dealVal = 124;
  let offerVal = 4203;
  let lastTickTime = 0;
  const TICK_INTERVAL = 3200; // ms

  function tickNumerals(now) {
    if (now - lastTickTime > TICK_INTERVAL) {
      lastTickTime = now;
      dealVal += Math.round(Math.random() * 3 - 1); // -1 to +2
      offerVal += Math.round(Math.random() * 7 - 2); // -2 to +5
      dealVal = Math.max(118, Math.min(132, dealVal));
      offerVal = Math.max(4180, Math.min(4240, offerVal));
      if (numDeals) numDeals.textContent = String(dealVal);
      if (numOffers) numOffers.textContent = String(offerVal);
    }
  }

  // Gauge rotation
  function animateGauge(now) {
    if (arcEl) {
      const rot = (now / 40) % 360;
      arcEl.setAttribute('transform', `rotate(${rot})`);
    }
    if (dotEl) {
      const pulse = 2.5 + Math.sin(now / 400) * 1.5;
      dotEl.setAttribute('r', String(pulse));
      dotEl.setAttribute('opacity', String(0.7 + Math.sin(now / 400) * 0.3));
    }
  }

  // Chart shimmer sweep
  function animateShimmer(now) {
    if (!chartShimmer) return;
    const cycle = 4500; // ms for one sweep
    const progress = (now % cycle) / cycle;
    const x = -100 + progress * 580;
    chartShimmer.setAttribute('x', String(x));
  }

  // Chart line subtle redraw (shift path slightly)
  const offerLineEl = document.getElementById('hud-offer-line');
  const counterLineEl = document.getElementById('hud-counter-line');
  let lastLineTime = 0;
  const LINE_INTERVAL = 5000;

  function animateLines(now) {
    if (now - lastLineTime < LINE_INTERVAL) return;
    lastLineTime = now;

    // Slight random Y shifts on middle points
    function jitter(base, range) {
      return base + Math.round(Math.random() * range - range / 2);
    }

    if (offerLineEl) {
      const d = `M 0 ${jitter(100,4)} L 40 ${jitter(85,3)} L 80 ${jitter(90,3)} L 120 ${jitter(70,4)} L 160 ${jitter(60,3)} L 200 ${jitter(55,3)} L 240 ${jitter(40,3)} L 280 ${jitter(30,2)} L 320 ${jitter(20,2)} L 360 ${jitter(15,2)} L 380 ${jitter(12,1)}`;
      offerLineEl.setAttribute('d', d);
    }
    if (counterLineEl) {
      const d = `M 0 ${jitter(30,3)} L 40 ${jitter(45,3)} L 80 ${jitter(40,3)} L 120 ${jitter(55,3)} L 160 ${jitter(50,3)} L 200 ${jitter(45,3)} L 240 ${jitter(35,2)} L 280 ${jitter(28,2)} L 320 ${jitter(19,2)} L 360 ${jitter(15,1)} L 380 ${jitter(12,1)}`;
      counterLineEl.setAttribute('d', d);
    }
  }

  // ── Main animation loop ──
  function animate(now) {
    if (paused || reducedMotion) return;
    time = now;

    tickNumerals(now);
    animateGauge(now);
    animateShimmer(now);
    animateLines(now);

    rafId = requestAnimationFrame(animate);
  }

  // ── Mouse parallax (max 8px translate, 3deg rotate) ──
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  const LERP = 0.06;

  function onMouseMove(e) {
    if (isTouch || reducedMotion) return;
    const rect = scene.getBoundingClientRect();
    // -0.5 to +0.5
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    targetX = nx;
    targetY = ny;
  }

  function onMouseLeave() {
    targetX = 0;
    targetY = 0;
  }

  let parallaxRaf = null;
  function parallaxLoop() {
    currentX += (targetX - currentX) * LERP;
    currentY += (targetY - currentY) * LERP;

    const tx = currentX * 16; // max ~8px
    const ty = currentY * 16;
    const rx = currentY * -6; // max ~3deg
    const ry = currentX * 6;

    if (wrapper) {
      wrapper.style.transform = `translate(${tx}px, ${ty}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }

    parallaxRaf = requestAnimationFrame(parallaxLoop);
  }

  if (!isTouch && !reducedMotion) {
    scene.addEventListener('mousemove', onMouseMove, { passive: true });
    scene.addEventListener('mouseleave', onMouseLeave, { passive: true });
    parallaxLoop();
  }

  // ── Visibility handling ──
  function onVisibilityChange() {
    if (document.hidden) {
      paused = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (parallaxRaf) cancelAnimationFrame(parallaxRaf);
    } else if (!reducedMotion) {
      paused = false;
      rafId = requestAnimationFrame(animate);
      if (!isTouch) parallaxRaf = requestAnimationFrame(parallaxLoop);
    }
  }
  document.addEventListener('visibilitychange', onVisibilityChange);

  // ── Start ──
  if (!reducedMotion) {
    rafId = requestAnimationFrame(animate);
  }

  // ── Cleanup on page unload ──
  window.addEventListener('beforeunload', () => {
    if (rafId) cancelAnimationFrame(rafId);
    if (parallaxRaf) cancelAnimationFrame(parallaxRaf);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (scene) {
      scene.removeEventListener('mousemove', onMouseMove);
      scene.removeEventListener('mouseleave', onMouseLeave);
    }
  });

})();
