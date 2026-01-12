import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

export const generateAmortizationExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const acquisitionValue = randomInt(10, 500) * 1000;
        const residualValue = Math.floor(acquisitionValue * (randomInt(0, 10) / 100)); // 0-10% residual
        const usefulLife = randomInt(4, 20); // years

        const annualFee = (acquisitionValue - residualValue) / usefulLife;

        exercises.push({
            id: generateId('AMORT', i),
            category: 'Gestión del Inmovilizado',
            title: 'Cálculo de Amortización Lineal',
            question: 'Calcula la cuota de amortización anual lineal para un activo con los siguientes datos:',
            data: {
                'Valor de Adquisición': formatCurrency(acquisitionValue),
                'Valor Residual': formatCurrency(residualValue),
                'Vida Útil': `${usefulLife} años`
            },
            solution: formatCurrency(annualFee),
            explanation: `Fórmula: (V. Adquisición - V. Residual) / Vida Útil\n(${acquisitionValue} - ${residualValue}) / ${usefulLife} = ${formatNumber(annualFee, 2)}`
        });
    }

    return exercises;
};
