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

            const questionsIVA = [
                'Calcula la liquidación trimestral del IVA (Modelo 303).',
                'Determina el resultado de la declaración de IVA a ingresar o devolver.',
                'Halla la cuota final de IVA a pagar a Hacienda (o a compensar) dados los siguientes datos.',
                'Realiza el cálculo del IVA repercutido y soportado para obtener el resultado de la liquidación.'
            ];
            const questionIVA = questionsIVA[i % questionsIVA.length];

            exercises.push({
                id: generateId('IVA', i),
                category: 'Fiscalidad',
                title: 'Liquidación de IVA',
                question: questionIVA,
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

            const questionsIS = [
                'Calcula la Cuota Diferencial del Impuesto sobre Sociedades.',
                'Determina la cantidad final a ingresar o devolver por el Impuesto de Sociedades.',
                'Halla la liquidación final del IS teniendo en cuenta las retenciones y pagos a cuenta.'
            ];
            const questionIS = questionsIS[i % questionsIS.length];

            exercises.push({
                id: generateId('IS', i),
                category: 'Fiscalidad',
                title: 'Cuota Diferencial IS',
                question: questionIS,
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
