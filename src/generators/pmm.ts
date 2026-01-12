import type { Exercise } from '../types';
import { randomInt, formatNumber, generateId } from './utils';

export const generatePMMExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];
    const subTypes = ['global', 'almacenamiento', 'cobro'];

    for (let i = 0; i < count; i++) {
        const type = subTypes[i % subTypes.length];

        if (type === 'global') {
            const pma = randomInt(10, 40);
            const pmf = randomInt(5, 20);
            const pmv = randomInt(10, 30);
            const pmc = randomInt(30, 90);
            const pmp = randomInt(30, 90);
            const pmmF = pma + pmf + pmv + pmc - pmp;

            exercises.push({
                id: generateId('PMM', i),
                category: 'Análisis Financiero',
                title: 'Cálculo PMM Financiero',
                question: 'Calcula el Periodo Medio de Maduración Financiero.',
                data: {
                    'PMa': `${pma}`, 'PMf': `${pmf}`, 'PMv': `${pmv}`, 'PMc': `${pmc}`, 'PMp': `${pmp}`
                },
                solution: `${pmmF} días`,
                explanation: `PMa+PMf+PMv+PMc - PMp = ${pma}+${pmf}+${pmv}+${pmc}-${pmp} = ${pmmF}`,
                correctValue: pmmF,
                valueType: 'number'
            });
        } else if (type === 'almacenamiento') {
            const consumo = randomInt(10000, 50000);
            const stock = randomInt(1000, 5000);
            const na = consumo / stock;
            const pma = 365 / na;

            exercises.push({
                id: generateId('PMM', i),
                category: 'Análisis Financiero',
                title: 'Cálculo PM Almacenamiento',
                question: 'Calcula el PMa.',
                data: { 'Consumo': `${consumo}`, 'Stock medio': `${stock}` },
                solution: `${formatNumber(pma, 2)} días`,
                explanation: `365 / (Consumo/Stock) = ${formatNumber(pma, 2)}`,
                correctValue: pma,
                valueType: 'number'
            });
        } else {
            const ventas = randomInt(50000, 200000);
            const saldo = randomInt(10000, 40000);
            const nc = ventas / saldo;
            const pmc = 365 / nc;

            exercises.push({
                id: generateId('PMM', i),
                category: 'Análisis Financiero',
                title: 'Cálculo PM Cobro',
                question: 'Calcula el PMc.',
                data: { 'Ventas': `${ventas}`, 'Saldo Clientes': `${saldo}` },
                solution: `${formatNumber(pmc, 2)} días`,
                explanation: `365 / (Ventas/Saldo) = ${formatNumber(pmc, 2)}`,
                correctValue: pmc,
                valueType: 'number'
            });
        }
    }

    return exercises;
};
