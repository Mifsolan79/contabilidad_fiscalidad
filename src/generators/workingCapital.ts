import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId } from './utils';

export const generateWorkingCapitalExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        // 50% chance for method 1 (Short term) vs method 2 (Long term)
        const useShortTermMethod = Math.random() > 0.5;

        // Scale for values: 50,000 to 500,000
        const baseScale = randomInt(50, 500) * 1000;

        // Generate balanced sheets components approximately
        const totalAssets = baseScale;
        const nonCurrentAssets = Math.floor(totalAssets * (randomInt(40, 70) / 100));
        const currentAssets = totalAssets - nonCurrentAssets;

        const equity = Math.floor(totalAssets * (randomInt(30, 60) / 100));
        const nonCurrentLiabilities = Math.floor((totalAssets - equity) * (randomInt(20, 50) / 100));
        const currentLiabilities = totalAssets - equity - nonCurrentLiabilities;

        const fmValue = currentAssets - currentLiabilities;
        // Check consistency: FM = PN + PNC - ANC should match
        // PN + PNC - ANC = equity + nonCurrentLiabilities - nonCurrentAssets
        // = equity + nonCurrentLiabilities - (totalAssets - currentAssets)
        // = currentAssets - (totalAssets - equity - nonCurrentLiabilities) = currentAssets - currentLiabilities. Correct.

        if (useShortTermMethod) {
            exercises.push({
                id: generateId('FM', i),
                category: 'Análisis Patrimonial',
                title: 'Cálculo del Fondo de Maniobra',
                question: 'Calcula el Fondo de Maniobra de la empresa basándote en los siguientes datos del Activo y Pasivo Corriente.',
                data: {
                    'Activo Corriente': formatCurrency(currentAssets),
                    'Pasivo Corriente': formatCurrency(currentLiabilities)
                },
                solution: `${formatCurrency(fmValue)}`,
                explanation: `Fórmula: FM = AC - PC\nFM = ${currentAssets} - ${currentLiabilities} = ${fmValue}`
            });
        } else {
            exercises.push({
                id: generateId('FM', i),
                category: 'Análisis Patrimonial',
                title: 'Cálculo del Fondo de Maniobra (Vía Capitales Permanentes)',
                question: 'Calcula el Fondo de Maniobra utilizando los datos de los Capitales Permanentes y el Activo No Corriente.',
                data: {
                    'Patrimonio Neto': formatCurrency(equity),
                    'Pasivo No Corriente': formatCurrency(nonCurrentLiabilities),
                    'Activo No Corriente': formatCurrency(nonCurrentAssets)
                },
                solution: `${formatCurrency(fmValue)}`,
                explanation: `Fórmula: FM = (PN + Provisión Largo Plazo) - ANC\nFM = (${equity} + ${nonCurrentLiabilities}) - ${nonCurrentAssets} = ${equity + nonCurrentLiabilities} - ${nonCurrentAssets} = ${fmValue}`
            });
        }
    }

    return exercises;
};
