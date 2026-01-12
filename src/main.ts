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
        <span style="font-size: 1.2em">📊</span>
        Ejercicios Finanzas
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
      <div style="margin-top: auto; color: var(--text-secondary); font-size: 0.8rem;">
         Generado dinámicamente<br>Versión 1.0
      </div>
    </aside>
  `;
};

const renderExerciseCard = (ex: Exercise) => {
  const dataHtml = Object.entries(ex.data)
    .map(([key, value]) => `<div><strong>${key}:</strong> ${value}</div>`)
    .join('');

  return `
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-id">${ex.id}</span>
        <span style="font-size: 0.8rem; color: var(--accent-color)">${ex.category}</span>
      </div>
      <div class="exercise-content">
        <h3>${ex.title}</h3>
        <p style="margin: 0.5rem 0; color: #cbd5e1">${ex.question}</p>
        
        <div class="exercise-data">
          ${dataHtml}
        </div>
      </div>
      
      <div class="solution-container">
        <button class="btn-reveal" onclick="document.getElementById('sol-${ex.id}').classList.remove('hidden'); this.style.display='none'">
          Ver Solución
        </button>
        <div id="sol-${ex.id}" class="solution-content hidden">
          <div><strong>Solución:</strong> ${ex.solution}</div>
          ${ex.explanation ? `<div style="margin-top: 0.5rem; font-size: 0.9rem; color: #f8fafc; white-space: pre-wrap; word-break: break-word; line-height: 1.4; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 5px;">${ex.explanation}</div>` : ''}
        </div>
      </div>
    </div>
  `;
};

const renderMain = () => {
  const exercises = filterExercises();

  return `
    <main>
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
        <div>
           <h2>${activeCategory}</h2>
           <p class="intro-text">Mostrando ${exercises.length} ejercicios prácticos generados.</p>
        </div>
        <button id="menu-toggle" style="display: none; background: none; border: none; color: white; font-size: 1.5rem;">☰</button>
      </div>
      
      <div class="exercises-grid">
        ${exercises.map(renderExerciseCard).join('')}
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
      window.scrollTo(0, 0);
    });
  });
};

init();
