import type { Exercise } from '../types';
import { randomInt, formatNumber, generateId } from './utils';

export const generatePMMExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];
    const subTypes = ['global', 'almacenamiento', 'cobro', 'pago'];

    for (let i = 0; i < count; i++) {
        const type = subTypes[i % subTypes.length];

        if (type === 'global') {
            const pma = randomInt(10, 40);
            const pmf = randomInt(5, 20);
            const pmv = randomInt(10, 30);
            const pmc = randomInt(30, 90);
            const pmp = randomInt(30, 90);

            exercises.push({
                id: generateId('PMM', i),
                category: 'Análisis Financiero',
                title: 'Cálculo del PMM Económico y Financiero',
                question: 'Dados los siguientes periodos medios (en días), calcula el Periodo Medio de Maduración Económico y el Financiero.',
                data: {
                    'PM Almacenamiento (PMa)': `${pma} días`,
                    'PM Fabricación (PMf)': `${pmf} días`,
                    'PM Venta (PMv)': `${pmv} días`,
                    'PM Cobro (PMc)': `${pmc} días`,
                    'PM Pago (PMp)': `${pmp} días`
                },
                solution: `PMM Ec: ${pma + pmf + pmv + pmc} días | PMM Fin: ${pma + pmf + pmv + pmc - pmp} días`,
                explanation: `PMM Económico = PMa + PMf + PMv + PMc = ${pma + pmf + pmv + pmc}\nPMM Financiero = PMM Económico - PMp = ${pma + pmf + pmv + pmc} - ${pmp} = ${pma + pmf + pmv + pmc - pmp}`
            });
        } else if (type === 'almacenamiento') {
            const consumo = randomInt(10000, 50000);
            const stock = randomInt(1000, 5000);
            const na = consumo / stock;
            const pma = 365 / na;

            exercises.push({
                id: generateId('PMM', i),
                category: 'Análisis Financiero',
                title: 'Cálculo del Periodo Medio de Almacenamiento',
                question: 'Calcula el periodo medio de almacenamiento.',
                data: {
                    'Consumo anual de materias primas': formatNumber(consumo),
                    'Stock medio de materias primas': formatNumber(stock)
                },
                solution: `${formatNumber(pma, 2)} días`,
                explanation: `Rotación (na) = Consumo / Stock = ${formatNumber(na, 2)}\nPMa = 365 / na = 365 / ${formatNumber(na, 2)} = ${formatNumber(pma, 2)}`
            });
        } else {
            // Cobro (very similar logic)
            const ventas = randomInt(50000, 200000);
            const saldo = randomInt(10000, 40000);
            const nc = ventas / saldo;
            const pmc = 365 / nc;

            exercises.push({
                id: generateId('PMM', i),
                category: 'Análisis Financiero',
                title: 'Cálculo del Periodo Medio de Cobro',
                question: 'Calcula el periodo medio de cobro a clientes.',
                data: {
                    'Ventas a crédito': formatNumber(ventas),
                    'Saldo medio de clientes': formatNumber(saldo)
                },
                solution: `${formatNumber(pmc, 2)} días`,
                explanation: `Rotación (nc) = Ventas / Saldo = ${formatNumber(nc, 2)}\nPMc = 365 / nc = 365 / ${formatNumber(nc, 2)} = ${formatNumber(pmc, 2)}`
            });
        }
    }

    return exercises;
};
