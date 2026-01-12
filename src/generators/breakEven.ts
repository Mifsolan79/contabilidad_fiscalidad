import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

export const generateBreakEvenExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const price = randomInt(10, 200);
        const variableCost = Math.floor(price * (randomInt(30, 70) / 100));
        const fixedCosts = randomInt(100, 2000) * 100;

        const margin = price - variableCost;
        const q = fixedCosts / margin;
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
            explanation: `Fórmula: Q = CF / (P - CVu)\nQ = ${fixedCosts} / (${price} - ${variableCost}) = ${fixedCosts} / ${margin} = ${formatNumber(q, 2)}`,
            correctValue: breakEvenPoint,
            valueType: 'number'
        });
    }

    return exercises;
};
