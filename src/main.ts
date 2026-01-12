import './styles/main.css';
import { generateAllExercises } from './generators';
import type { Exercise } from './types';

// State
let allExercises: Exercise[] = [];
let activeCategory: string = 'Todos';

// DOM Elements
const appDiv = document.querySelector<HTMLDivElement>('#app')!;

const init = () => {
  allExercises = generateAllExercises();
  render();
};

// Global function for validation
(window as any).validateExercise = (id: string, correctVal: number | string, type: string) => {
  const input = document.getElementById(`input-${id}`) as HTMLInputElement;
  const feedback = document.getElementById(`feedback-${id}`)!;
  const solutionDiv = document.getElementById(`sol-${id}`)!;
  const btn = document.getElementById(`btn-${id}`) as HTMLButtonElement;

  if (!input) return;

  const userVal = parseFloat(input.value.replace(',', '.'));
  let isCorrect = false;

  if (type === 'number' || type === 'currency' || type === 'percentage') {
    // Numeric comparison with tolerance
    const correctNum = Number(correctVal);
    // Tolerance of 5% or 0.1 absolute
    const tolerance = Math.max(0.1, Math.abs(correctNum * 0.05));

    if (!isNaN(userVal) && Math.abs(userVal - correctNum) <= tolerance) {
      isCorrect = true;
    }
  } else {
    // Text comparison (not heavily used yet)
    if (input.value.trim().toLowerCase() === String(correctVal).toLowerCase()) {
      isCorrect = true;
    }
  }

  if (isCorrect) {
    feedback.innerHTML = '<span style="color: #4ade80; font-weight:bold;">✅ ¡Correcto!</span>';
    feedback.classList.remove('hidden');
    solutionDiv.classList.remove('hidden');
    btn.style.display = 'none';
    input.disabled = true;
    input.style.borderColor = '#4ade80';
  } else {
    feedback.innerHTML = '<span style="color: #f87171; font-weight:bold;">❌ Incorrecto. Inténtalo de nuevo o revisa la solución.</span>';
    feedback.classList.remove('hidden');
    solutionDiv.classList.remove('hidden'); // Show solution anyway after fail if desired, or keep hidden. 
    // Let's keep button to allow retry? OR show solution. 
    // User requested "diga si es correcto". Usually showing solution after fail is helpful.
    btn.innerText = 'Ver Solución Completa';
    btn.onclick = () => {
      solutionDiv.classList.remove('hidden');
      btn.style.display = 'none';
    };
    input.style.borderColor = '#f87171';
  }
};


const getCategories = () => {
  const categories = new Set(allExercises.map(ex => ex.category));
  return ['Todos', ...Array.from(categories)];
};

const filterExercises = () => {
  if (activeCategory === 'Todos') return allExercises;
  return allExercises.filter(ex => ex.category === activeCategory);
};

const renderSidebar = () => {
  const categories = getCategories();

  return `
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        ${categories.map(cat => `
          <button 
            class="${cat === activeCategory ? 'active' : ''}" 
            data-category="${cat}"
          >
            ${cat}
          </button>
        `).join('')}
      </nav>
      <div style="margin-top:auto; font-size:0.75rem; color:var(--text-muted); opacity:0.6;">
        v2.1 Interactive
      </div>
    </aside>
  `;
};

const renderExerciseCard = (ex: Exercise) => {
  const dataHtml = Object.entries(ex.data)
    .map(([key, value]) => `<div><span>${key}</span> <span>${value}</span></div>`)
    .join('');

  // Determine input placeholder based on type
  const placeholder = ex.valueType === 'percentage' ? 'Ej: 15.5' : ex.valueType === 'currency' ? 'Ej: 5000' : 'Resultado';
  const unit = ex.valueType === 'percentage' ? '%' : ex.valueType === 'currency' ? '€' : '';

  return `
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${ex.id}</span>
        <span class="exercise-category">${ex.category}</span>
      </div>
      
      <h3>${ex.title}</h3>
      <p class="exercise-question">${ex.question}</p>
      
      <div class="exercise-data">
        ${dataHtml}
      </div>
      
      <div class="interaction-area" style="margin-top: auto;">
        <div style="display:flex; gap:10px; margin-bottom:10px; align-items:center;">
          <input type="number" id="input-${ex.id}" placeholder="${placeholder}" 
                 style="flex:1; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:white; font-family:var(--font-mono);">
          <span style="color:var(--text-secondary)">${unit}</span>
        </div>
        
        <button id="btn-${ex.id}" class="btn-reveal" 
          onclick="validateExercise('${ex.id}', '${ex.correctValue}', '${ex.valueType}')">
          Comprobar
        </button>
        
        <div id="feedback-${ex.id}" class="hidden" style="margin-top:10px; font-size:0.9rem;"></div>
        
        <div id="sol-${ex.id}" class="solution-content hidden">
          <div class="solution-val">${ex.solution}</div>
          ${ex.explanation ? `<div class="solution-expl">${ex.explanation}</div>` : ''}
        </div>
      </div>
    </div>
  `;
};

const renderMain = () => {
  const exercises = filterExercises();

  return `
    <main>
      <div class="content-wrapper">
        <header>
          <h2>${activeCategory}</h2>
          <p class="intro-text">Resuelve ${exercises.length} retos interactivos.</p>
        </header>
        
        <div class="exercises-grid">
          ${exercises.map(renderExerciseCard).join('')}
        </div>
      </div>
    </main>
  `;
};

const render = () => {
  appDiv.innerHTML = `
    ${renderSidebar()}
    ${renderMain()}
  `;

  document.querySelectorAll('aside nav button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      activeCategory = target.dataset.category || 'Todos';
      render();
      document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
};

init();
