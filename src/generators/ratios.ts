import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

type RatioType = 'liquidez' | 'tesoreria' | 'disponibilidad' | 'garantia' | 'endeudamiento' | 'calidad_deuda';

export const generateRatioExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];
    const ratioTypes: RatioType[] = ['liquidez', 'tesoreria', 'disponibilidad', 'garantia', 'endeudamiento', 'calidad_deuda'];

    for (let i = 0; i < count; i++) {
        const type = ratioTypes[i % ratioTypes.length];

        const scale = randomInt(100, 10000);

        const cash = randomInt(10, 50) * scale;
        const realizable = randomInt(20, 80) * scale;
        const stock = randomInt(30, 100) * scale;
        const currentAssets = cash + realizable + stock;
        const nonCurrentAssets = randomInt(100, 500) * scale;
        const totalAssets = currentAssets + nonCurrentAssets;

        const totalLiabilities = Math.floor(totalAssets / randomInt(120, 250) * 100);
        const equity = totalAssets - totalLiabilities;

        const currentLiabilities = Math.floor(totalLiabilities * (randomInt(30, 80) / 100));

        let question = '';
        let solution = '';
        let explanation = '';
        let data: Record<string, string | number> = {};
        let title = '';
        let correctVal = 0;

        switch (type) {
            case 'liquidez':
                title = 'Ratio de Liquidez General';
                const qsLiquidez = ['Calcula el Ratio de Liquidez General.', 'Determina la solvencia a corto plazo mediante el Ratio de Liquidez.', '¿Cuál es la capacidad de la empresa para hacer frente a sus deudas a corto plazo con sus activos corrientes?'];
                question = qsLiquidez[i % qsLiquidez.length];
                data = { 'Activo Corriente': formatCurrency(currentAssets), 'Pasivo Corriente': formatCurrency(currentLiabilities) };
                correctVal = currentAssets / currentLiabilities;
                solution = formatNumber(correctVal, 2);
                explanation = `Fórmula: AC / PC = ${currentAssets} / ${currentLiabilities} = ${correctVal.toFixed(4)}`;
                break;
            case 'tesoreria':
                title = 'Ratio de Tesorería';
                const qsTesoreria = ['Calcula el Ratio de Tesorería (Acid Test).', 'Halla el coeficiente de tesorería (Acid Test) excluyendo las existencias.', 'Determina la capacidad de pago inmediata sin contar con la venta de stock (Acid Test).'];
                question = qsTesoreria[i % qsTesoreria.length];
                data = {
                    'Realizable': formatCurrency(realizable),
                    'Disponible': formatCurrency(cash),
                    'Pasivo Corriente': formatCurrency(currentLiabilities)
                };
                correctVal = (realizable + cash) / currentLiabilities;
                solution = formatNumber(correctVal, 2);
                explanation = `Fórmula: (Realizable + Disponible) / PC = (${realizable} + ${cash}) / ${currentLiabilities} = ${correctVal.toFixed(4)}`;
                break;
            case 'disponibilidad':
                title = 'Ratio de Disponibilidad';
                const qsDispo = ['Calcula el Ratio de Disponibilidad.', '¿Cuál es la disponibilidad inmediata de la empresa frente a sus deudas a corto plazo?', 'Determina el ratio más exigente de liquidez (Disponibilidad).'];
                question = qsDispo[i % qsDispo.length];
                data = { 'Disponible': formatCurrency(cash), 'Pasivo Corriente': formatCurrency(currentLiabilities) };
                correctVal = cash / currentLiabilities;
                solution = formatNumber(correctVal, 2);
                explanation = `Fórmula: Disponible / PC = ${cash} / ${currentLiabilities} = ${correctVal.toFixed(4)}`;
                break;
            case 'garantia':
                title = 'Ratio de Garantía';
                const qsGarantia = ['Calcula el Ratio de Garantía.', 'Determina la solvencia total o garantía de la empresa frente a terceros.', '¿Cuál es la distancia a la quiebra? Calcula el Ratio de Garantía.'];
                question = qsGarantia[i % qsGarantia.length];
                data = { 'Activo Total': formatCurrency(totalAssets), 'Pasivo Total': formatCurrency(totalLiabilities) };
                correctVal = totalAssets / totalLiabilities;
                solution = formatNumber(correctVal, 2);
                explanation = `Fórmula: Activo Total / Pasivo Total = ${totalAssets} / ${totalLiabilities} = ${correctVal.toFixed(4)}`;
                break;
            case 'endeudamiento':
                title = 'Ratio de Endeudamiento';
                const qsEndeudamiento = ['Calcula el ratio de endeudamiento total.', 'Determina qué proporción de los recursos totales es financiada por deuda.', '¿Cuál es el nivel de dependencia financiera externa (Ratio de Endeudamiento)?'];
                question = qsEndeudamiento[i % qsEndeudamiento.length];
                data = { 'Pasivo Total': formatCurrency(totalLiabilities), 'Patrimonio Neto': formatCurrency(equity) };
                // Formula used: Pasivo / (PN + Pasivo) aka Pasivo / Total Activo
                correctVal = totalLiabilities / (equity + totalLiabilities);
                solution = formatNumber(correctVal, 2);
                explanation = `Fórmula: Pasivo / (PN + Pasivo) = ${totalLiabilities} / (${equity} + ${totalLiabilities}) = ${correctVal.toFixed(4)}`;
                break;
            case 'calidad_deuda':
                title = 'Ratio de Calidad de la Deuda';
                const qsCalidad = ['Calcula el ratio de Calidad de la Deuda.', '¿Qué porcentaje de la deuda total vence a corto plazo? (Calidad de la Deuda).', 'Analiza la estructura de la deuda calculando su calidad.'];
                question = qsCalidad[i % qsCalidad.length];
                data = { 'Pasivo Corriente': formatCurrency(currentLiabilities), 'Pasivo Total': formatCurrency(totalLiabilities) };
                correctVal = currentLiabilities / totalLiabilities;
                solution = formatNumber(correctVal, 2);
                explanation = `Fórmula: Pasivo Corriente / Pasivo Total = ${currentLiabilities} / ${totalLiabilities} = ${correctVal.toFixed(4)}`;
                break;
        }

        exercises.push({
            id: generateId('RATIO', i),
            category: 'Ratios Financieros y Patrimoniales',
            title: title,
            question: question,
            data: data,
            solution: solution,
            explanation: explanation,
            correctValue: correctVal,
            valueType: 'number'
        });
    }

    return exercises;
};
