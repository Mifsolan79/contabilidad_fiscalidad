import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId } from './utils';

export const generateFiscalExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const isIva = Math.random() > 0.5;

        if (isIva) {
            const repercutido = randomInt(5000, 50000);
            const soportado = randomInt(3000, 45000);
            const result = repercutido - soportado;
            const typeStr = result > 0 ? 'A PAGAR' : 'A COMPENSAR/DEVOLVER';

            exercises.push({
                id: generateId('FISCAL', i),
                category: 'Fiscalidad',
                title: 'Liquidación de IVA',
                question: 'Calcula el resultado de la liquidación (positivo o negativo).',
                data: {
                    'IVA Repercutido': formatCurrency(repercutido),
                    'IVA Soportado': formatCurrency(soportado)
                },
                solution: `${formatCurrency(result)} (${typeStr})`,
                explanation: `${repercutido} - ${soportado} = ${result}`,
                correctValue: result,
                valueType: 'currency'
            });
        } else {
            const bi = randomInt(10000, 1000000);
            const ci = bi * 0.25;
            const deductions = randomInt(0, 5000);
            const retentions = randomInt(0, 5000);
            const cd = ci - deductions - retentions;

            exercises.push({
                id: generateId('FISCAL', i),
                category: 'Fiscalidad',
                title: 'Cuota Diferencial IS',
                question: 'Calcula la Cuota Diferencial.',
                data: {
                    'Base Imponible': formatCurrency(bi),
                    'Tipo': '25%',
                    'Deducciones': formatCurrency(deductions),
                    'Retenciones': formatCurrency(retentions)
                },
                solution: formatCurrency(cd),
                explanation: `CI=${ci} -> CL=${ci - deductions} -> CD=${cd}`,
                correctValue: cd,
                valueType: 'currency'
            });
        }
    }

    return exercises;
};
