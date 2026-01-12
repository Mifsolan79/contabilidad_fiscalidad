import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId } from './utils';

export const generateFiscalExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];

    for (let i = 0; i < count; i++) {
        const isIva = Math.random() > 0.5;

        if (isIva) {
            const repercutido = randomInt(5000, 50000);
            const soportado = randomInt(3000, 45000); // Can be higher than repercutido (a devolver)
            const result = repercutido - soportado;
            const typeStr = result > 0 ? 'A PAGAR' : 'A COMPENSAR/DEVOLVER';

            exercises.push({
                id: generateId('FISCAL', i),
                category: 'Fiscalidad',
                title: 'Liquidación de IVA (Modelo 303)',
                question: 'Realiza la liquidación del IVA trimestral con los siguientes datos y determina si es a pagar o a compensar.',
                data: {
                    'IVA Repercutido (Devengado)': formatCurrency(repercutido),
                    'IVA Soportado (Deducible)': formatCurrency(soportado)
                },
                solution: `${formatCurrency(result)} (${typeStr})`,
                explanation: `Fórmula: IVA Repercutido - IVA Soportado\n${repercutido} - ${soportado} = ${result} €`
            });
        } else {
            // IS
            const bi = randomInt(10000, 1000000);
            // const tipo = 25; // unused
            const ci = bi * 0.25;
            const deductions = randomInt(0, 5000);
            const retentions = randomInt(0, 5000);
            const cd = ci - deductions - retentions;

            exercises.push({
                id: generateId('FISCAL', i),
                category: 'Fiscalidad',
                title: 'Cálculo Cuota Diferencial IS',
                question: 'Calcula la Cuota Diferencial del Impuesto sobre Sociedades.',
                data: {
                    'Base Imponible': formatCurrency(bi),
                    'Tipo de Gravamen': '25%',
                    'Deducciones y Bonificaciones': formatCurrency(deductions),
                    'Retenciones y Pagos a Cuenta': formatCurrency(retentions)
                },
                solution: formatCurrency(cd),
                explanation: `Cuota Íntegra = ${bi} x 0.25 = ${ci}\nCuota Líquida = ${ci} - ${deductions} = ${ci - deductions}\nCuota Diferencial = Cuota Líquida - Pagos a cuenta = ${ci - deductions} - ${retentions} = ${cd}`
            });
        }
    }

    return exercises;
};
