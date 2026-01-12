import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

export const generateAmortizationExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const acquisitionValue = randomInt(10, 500) * 1000;
        const residualValue = Math.floor(acquisitionValue * (randomInt(0, 10) / 100));
        const usefulLife = randomInt(4, 20);

        const annualFee = (acquisitionValue - residualValue) / usefulLife;

        const questions = [
            'Calcula la cuota de amortización anual lineal para la siguiente máquina.',
            'Determina el gasto anual por depreciación de este activo usando el método lineal.',
            '¿Cuál es la amortización anual contable de este bien según los datos facilitados?',
            'Halla la cuota constante de amortización para este elemento del inmovilizado.'
        ];
        const question = questions[i % questions.length];

        exercises.push({
            id: generateId('AM', i),
            category: 'Gestión del Inmovilizado',
            title: 'Amortización Lineal',
            question: question,
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
