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
      <h1>
        <span style="border-radius:50%; background:rgba(56,189,248,0.2); padding:8px; display:inline-flex;">📊</span>
        <span>Finanzas</span>
      </h1>
      <nav>
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
        v1.2 Premium
      </div>
    </aside>
  `;
};

const renderExerciseCard = (ex: Exercise) => {
  const dataHtml = Object.entries(ex.data)
    .map(([key, value]) => `<div><span>${key}</span> <span>${value}</span></div>`)
    .join('');

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
      
      <div class="solution-container">
        <button class="btn-reveal" onclick="document.getElementById('sol-${ex.id}').classList.remove('hidden'); this.style.display='none'">
          Ver Solución
        </button>
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
          <p class="intro-text">Practica con ${exercises.length} ejercicios generados dinámicamente.</p>
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

  // Attach Events
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
