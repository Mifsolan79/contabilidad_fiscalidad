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
            const questionsROI = [
                'Calcula la Rentabilidad Económica (ROI).',
                'Determina el rendimiento de los activos totales (ROI) antes de intereses e impuestos.',
                '¿Cuál es la rentabilidad generada por el activo total de la empresa (ROI)?'
            ];
            const questionROI = questionsROI[i % questionsROI.length];

            exercises.push({
                id: generateId('ROI', i),
                category: 'Rentabilidad',
                title: 'Cálculo del ROI',
                question: questionROI,
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
            const questionsROE = [
                'Calcula la Rentabilidad Financiera (ROE).',
                'Determina el rendimiento para los accionistas (ROE) basándote en el beneficio neto.',
                '¿Cuál es la rentabilidad de los fondos propios (ROE) de esta empresa?'
            ];
            const questionROE = questionsROE[i % questionsROE.length];

            exercises.push({
                id: generateId('ROE', i),
                category: 'Rentabilidad',
                title: 'Cálculo del ROE',
                question: questionROE,
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
