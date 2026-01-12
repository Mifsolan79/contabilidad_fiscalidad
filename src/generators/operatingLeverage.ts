import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

export const generateOperatingLeverageExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const sales = randomInt(500, 5000) * 100;
        const variableCosts = Math.floor(sales * (randomInt(40, 70) / 100));
        const margin = sales - variableCosts;

        const maxFixed = Math.floor(margin * 0.9);
        const minFixed = Math.floor(margin * 0.2);
        const fixedCosts = randomInt(minFixed / 100, maxFixed / 100) * 100;

        const profit = margin - fixedCosts;
        const ao = margin / profit;

        const questions = [
            'Calcula el Grado de Apalancamiento Operativo (GAO) para esta empresa.',
            'Determina la sensibilidad del beneficio ante cambios en las ventas calculando el Apalancamiento Operativo.',
            '¿Cuál es el GAO de esta compañía dado su nivel actual de ventas y estructura de costes?',
            'Halla el multiplicador del beneficio (Apalancamiento Operativo) para un aumento en las ventas.'
        ];
        const question = questions[i % questions.length];

        exercises.push({
            id: generateId('AO', i),
            category: 'Análisis de Costes',
            title: 'Apalancamiento Operativo',
            question: question,
            data: {
                'Ventas': formatCurrency(sales),
                'Costes Variables': formatCurrency(variableCosts),
                'Costes Fijos': formatCurrency(fixedCosts)
            },
            solution: `AO = ${formatNumber(ao, 2)}`,
            explanation: `Fórmula: AO = MC / Beneficio\nAO = ${margin} / ${profit} = ${formatNumber(ao, 4)}`,
            correctValue: ao,
            valueType: 'number'
        });
    }

    return exercises;
};
