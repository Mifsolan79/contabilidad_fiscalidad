import './styles/main.css';
import { generateAllExercises } from './generators';
import { theoryTopics } from './theory';
import type { Exercise } from './types';

// State
let allExercises: Exercise[] = [];
let activeCategory: string = '';
let viewMode: 'exercises' | 'theory' = 'exercises';

// DOM Elements
const appDiv = document.querySelector<HTMLDivElement>('#app')!;

const init = () => {
  allExercises = generateAllExercises();
  const categories = new Set(allExercises.map(ex => ex.category));
  if (categories.size > 0) {
    activeCategory = Array.from(categories)[0];
  }
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
    const correctNum = Number(correctVal);
    const tolerance = Math.max(0.1, Math.abs(correctNum * 0.05));
    if (!isNaN(userVal) && Math.abs(userVal - correctNum) <= tolerance) {
      isCorrect = true;
    }
  } else {
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
    // Allow retry, do not show solution immediately unless requested via another mechanism if desired
    // But currently we just show feedback
    input.style.borderColor = '#f87171';
  }
};


const getCategories = () => {
  const categories = new Set(allExercises.map(ex => ex.category));
  return Array.from(categories);
};

const filterExercises = () => {
  return allExercises.filter(ex => ex.category === activeCategory);
};

const renderSidebar = () => {
  const categories = getCategories();

  return `
    <aside id="sidebar">
      <nav style="margin-top: 2rem;">
        <div style="margin-bottom: 2rem;">
            <button class="${viewMode === 'theory' ? 'active' : ''}" id="btn-theory" style="border: 1px solid var(--accent-color); color: var(--accent-color);">
               🎓 Aula Teórica
            </button>
        </div>

        <div style="margin-bottom:0.5rem; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); padding-left:10px;">Ejercicios</div>
        ${categories.map(cat => `
          <button 
            class="${cat === activeCategory && viewMode === 'exercises' ? 'active' : ''}" 
            data-category="${cat}"
          >
            ${cat}
          </button>
        `).join('')}
      </nav>
      <div style="margin-top:auto; font-size:0.75rem; color:var(--text-muted); opacity:0.6;">
        v3.4 Professor Mode
      </div>
    </aside>
  `;
};

const renderExerciseCard = (ex: Exercise) => {
  const dataHtml = Object.entries(ex.data)
    .map(([key, value]) => `<div><span>${key}</span> <span>${value}</span></div>`)
    .join('');

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

const renderTheory = () => {
  return `
    <main>
      <div class="content-wrapper">
        <header>
          <h2>Aula Teórica</h2>
          <p class="intro-text">Repasa los conceptos clave antes de practicar.</p>
        </header>
        
        <div class="exercises-grid" style="grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));">
          ${theoryTopics.map(topic => `
            <div class="exercise-card" style="border-color: rgba(6, 182, 212, 0.4);">
              <h3>${topic.title}</h3>
              <div style="color: var(--text-secondary); line-height: 1.6;">
                ${topic.content}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </main>
    `;
};

const renderMain = () => {
  if (viewMode === 'theory') {
    return renderTheory();
  }

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

  // Event Listeners
  // 1. Sidebar Category Buttons
  document.querySelectorAll('aside nav button[data-category]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      activeCategory = target.dataset.category || '';
      viewMode = 'exercises'; // Switch back to exercises
      render();
      document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // 2. Theory Button
  document.getElementById('btn-theory')?.addEventListener('click', () => {
    viewMode = 'theory';
    render();
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

init();
