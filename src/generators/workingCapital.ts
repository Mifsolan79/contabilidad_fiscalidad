import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId } from './utils';

export const generateWorkingCapitalExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const useShortTermMethod = Math.random() > 0.5;
        const baseScale = randomInt(50, 500) * 1000;

        const totalAssets = baseScale;
        const nonCurrentAssets = Math.floor(totalAssets * (randomInt(40, 70) / 100));
        const currentAssets = totalAssets - nonCurrentAssets;

        const equity = Math.floor(totalAssets * (randomInt(30, 60) / 100));
        const nonCurrentLiabilities = Math.floor((totalAssets - equity) * (randomInt(20, 50) / 100));
        const currentLiabilities = totalAssets - equity - nonCurrentLiabilities;

        const fmValue = currentAssets - currentLiabilities;

        if (useShortTermMethod) {
            exercises.push({
                id: generateId('FM', i),
                category: 'Análisis Patrimonial',
                title: 'Cálculo del Fondo de Maniobra',
                question: 'Calcula el Fondo de Maniobra (FM) de la empresa.',
                data: {
                    'Activo Corriente': formatCurrency(currentAssets),
                    'Pasivo Corriente': formatCurrency(currentLiabilities)
                },
                solution: `${formatCurrency(fmValue)}`,
                explanation: `Fórmula: FM = AC - PC\nFM = ${currentAssets} - ${currentLiabilities} = ${fmValue}`,
                correctValue: fmValue,
                valueType: 'currency'
            });
        } else {
            exercises.push({
                id: generateId('FM', i),
                category: 'Análisis Patrimonial',
                title: 'Cálculo del Fondo de Maniobra (Vía LP)',
                question: 'Calcula el Fondo de Maniobra utilizando los datos de los Capitales Permanentes.',
                data: {
                    'Patrimonio Neto': formatCurrency(equity),
                    'Pasivo No Corriente': formatCurrency(nonCurrentLiabilities),
                    'Activo No Corriente': formatCurrency(nonCurrentAssets)
                },
                solution: `${formatCurrency(fmValue)}`,
                explanation: `Fórmula: FM = (PN + Provisión Largo Plazo) - ANC\nFM = (${equity} + ${nonCurrentLiabilities}) - ${nonCurrentAssets} = ${fmValue}`,
                correctValue: fmValue,
                valueType: 'currency'
            });
        }
    }

    return exercises;
};
