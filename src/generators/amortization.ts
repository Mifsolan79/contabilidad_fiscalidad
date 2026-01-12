import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

export const generateAmortizationExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const acquisitionValue = randomInt(10, 500) * 1000;
        const residualValue = Math.floor(acquisitionValue * (randomInt(0, 10) / 100));
        const usefulLife = randomInt(4, 20);

        const annualFee = (acquisitionValue - residualValue) / usefulLife;

        exercises.push({
            id: generateId('AMORT', i),
            category: 'Gestión del Inmovilizado',
            title: 'Cálculo de Amortización Lineal',
            question: 'Calcula la cuota anual.',
            data: {
                'Valor de Adquisición': formatCurrency(acquisitionValue),
                'Valor Residual': formatCurrency(residualValue),
                'Vida Útil': `${usefulLife} años`
            },
            solution: formatCurrency(annualFee),
            explanation: `Fórmula: (V.Adq - V.Res) / Vida\n(${acquisitionValue} - ${residualValue}) / ${usefulLife} = ${formatNumber(annualFee, 2)}`,
            correctValue: annualFee,
            valueType: 'currency'
        });
    }

    return exercises;
};
