import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

export const generateBreakEvenExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        // Generate logical values
        // Price between 10 and 200
        const price = randomInt(10, 200);
        // Variable cost 30-70% of price
        const variableCost = Math.floor(price * (randomInt(30, 70) / 100));
        // Fixed costs between 10000 and 200000
        const fixedCosts = randomInt(100, 2000) * 100;

        const margin = price - variableCost;
        const q = fixedCosts / margin;

        // Adjust values if Q is not a "nice" number (optional, but good for educational purposes)
        // Actually, in real life it isn't always nice. Let's keep it real but maybe rounded up.

        const breakEvenPoint = Math.ceil(q);

        exercises.push({
            id: generateId('UR', i),
            category: 'Análisis de Costes',
            title: 'Cálculo del Umbral de Rentabilidad',
            question: 'Una empresa presenta la siguiente estructura de costes. Calcula el Umbral de Rentabilidad (Punto Muerto) en unidades físicas.',
            data: {
                'Costes Fijos Totales (CF)': formatCurrency(fixedCosts),
                'Precio de Venta Unitario (P)': formatCurrency(price),
                'Coste Variable Unitario (CVu)': formatCurrency(variableCost)
            },
            solution: `Q = ${formatNumber(breakEvenPoint, 0)} unidades`,
            explanation: `Fórmula: Q = CF / (P - CVu)\nQ = ${fixedCosts} / (${price} - ${variableCost}) = ${fixedCosts} / ${margin} = ${formatNumber(q, 2)}`
        });
    }

    return exercises;
};
