import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber, randomFloat } from './utils';

export const generateProfitabilityExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const isRoi = Math.random() > 0.5;

        const assets = randomInt(100, 1000) * 1000;
        const equity = Math.floor(assets * randomFloat(0.4, 0.7));
        const sales = Math.floor(assets * randomFloat(0.8, 1.5));
        const baii = Math.floor(sales * randomFloat(0.1, 0.25));
        const interest = Math.floor(baii * randomFloat(0.1, 0.3));
        const taxRate = 0.25;
        const bn = Math.floor((baii - interest) * (1 - taxRate));

        if (isRoi) {
            const val = (baii / assets) * 100;
            exercises.push({
                id: generateId('RENT', i),
                category: 'Rentabilidad',
                title: 'Rentabilidad Económica (ROI)',
                question: 'Calcula el ROI (%).',
                data: {
                    'Activo Total': formatCurrency(assets),
                    'BAII': formatCurrency(baii)
                },
                solution: `${formatNumber(val)} %`,
                explanation: `Fórmula: (BAII / Activo) x 100\n(${baii} / ${assets}) x 100 = ${formatNumber(val, 2)} %`,
                correctValue: val,
                valueType: 'percentage'
            });
        } else {
            const val = (bn / equity) * 100;
            exercises.push({
                id: generateId('RENT', i),
                category: 'Rentabilidad',
                title: 'Rentabilidad Financiera (ROE)',
                question: 'Calcula el ROE (%).',
                data: {
                    'Patrimonio Neto': formatCurrency(equity),
                    'Beneficio Neto': formatCurrency(bn)
                },
                solution: `${formatNumber(val)} %`,
                explanation: `Fórmula: (BN / PN) x 100\n(${bn} / ${equity}) x 100 = ${formatNumber(val, 2)} %`,
                correctValue: val,
                valueType: 'percentage'
            });
        }
    }

    return exercises;
};
