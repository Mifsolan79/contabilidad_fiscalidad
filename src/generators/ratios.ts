import type { Exercise } from '../types';
import { randomInt, formatCurrency, generateId, formatNumber } from './utils';

type RatioType = 'liquidez' | 'tesoreria' | 'disponibilidad' | 'garantia' | 'endeudamiento' | 'calidad_deuda';

export const generateRatioExercises = (count: number): Exercise[] => {
    const exercises: Exercise[] = [];
    const ratioTypes: RatioType[] = ['liquidez', 'tesoreria', 'disponibilidad', 'garantia', 'endeudamiento', 'calidad_deuda'];

    for (let i = 0; i < count; i++) {
        const type = ratioTypes[i % ratioTypes.length];

        // Generate Balance Components
        const scale = randomInt(100, 10000); // base multiplier

        // Assets
        const cash = randomInt(10, 50) * scale; // Disponible
        const realizable = randomInt(20, 80) * scale;
        const stock = randomInt(30, 100) * scale;
        const currentAssets = cash + realizable + stock;
        const nonCurrentAssets = randomInt(100, 500) * scale;
        const totalAssets = currentAssets + nonCurrentAssets;

        // Liabilities & Equity
        // Guarantee ratio usually > 1, so Total Assets > Total Liabilities
        // Let's set Total Liabilities randomly based on Assets
        const totalLiabilities = Math.floor(totalAssets / randomInt(120, 250) * 100); // Div by 1.2 to 2.5
        const equity = totalAssets - totalLiabilities;

        // Split Liabilities
        const currentLiabilities = Math.floor(totalLiabilities * (randomInt(30, 80) / 100));
        // const nonCurrentLiabilities = totalLiabilities - currentLiabilities;

        let question = '';
        let solution = '';
        let explanation = '';
        let data: Record<string, string | number> = {};
        let title = '';

        switch (type) {
            case 'liquidez':
                title = 'Ratio de Liquidez General';
                question = 'Calcula el Ratio de Liquidez General e interpreta si la empresa tiene capacidad para pagar sus deudas a corto plazo.';
                data = { 'Activo Corriente': formatCurrency(currentAssets), 'Pasivo Corriente': formatCurrency(currentLiabilities) };
                const valL = currentAssets / currentLiabilities;
                solution = formatNumber(valL, 2);
                explanation = `Fórmula: AC / PC = ${currentAssets} / ${currentLiabilities} = ${valL.toFixed(4)}`;
                break;
            case 'tesoreria':
                title = 'Ratio de Tesorería (Acid Test)';
                question = 'Calcula el Ratio de Tesorería (Acid Test).';
                data = {
                    'Realizable': formatCurrency(realizable),
                    'Disponible': formatCurrency(cash),
                    'Pasivo Corriente': formatCurrency(currentLiabilities)
                };
                const valT = (realizable + cash) / currentLiabilities;
                solution = formatNumber(valT, 2);
                explanation = `Fórmula: (Realizable + Disponible) / PC = (${realizable} + ${cash}) / ${currentLiabilities} = ${valT.toFixed(4)}`;
                break;
            case 'disponibilidad':
                title = 'Ratio de Disponibilidad';
                question = 'Calcula el Ratio de Disponibilidad inmediata.';
                data = { 'Disponible (Tesorería)': formatCurrency(cash), 'Pasivo Corriente': formatCurrency(currentLiabilities) };
                const valD = cash / currentLiabilities;
                solution = formatNumber(valD, 2);
                explanation = `Fórmula: Disponible / PC = ${cash} / ${currentLiabilities} = ${valD.toFixed(4)}`;
                break;
            case 'garantia':
                title = 'Ratio de Garantía';
                question = 'Calcula el Ratio de Garantía (Solvencia a largo plazo) e interpreta la distancia a la quiebra.';
                data = { 'Activo Total': formatCurrency(totalAssets), 'Pasivo Total (Exigible)': formatCurrency(totalLiabilities) };
                const valG = totalAssets / totalLiabilities;
                solution = formatNumber(valG, 2);
                explanation = `Fórmula: Activo Total / Pasivo Total = ${totalAssets} / ${totalLiabilities} = ${valG.toFixed(4)}`;
                break;
            case 'endeudamiento':
                title = 'Ratio de Endeudamiento';
                question = 'Calcula el ratio de endeudamiento total.';
                data = { 'Pasivo Total': formatCurrency(totalLiabilities), 'Patrimonio Neto': formatCurrency(equity) };
                // Formula used in text: Pasivo / (PN + Pasivo) aka Pasivo / Total Activo (since PN+P = A)
                // Wait, text said: Ratio endeudamiento = Pasivo / (PN + pasivo) (line 1765)
                const valE = totalLiabilities / (equity + totalLiabilities);
                solution = formatNumber(valE, 2);
                explanation = `Fórmula: Pasivo / (PN + Pasivo) = ${totalLiabilities} / (${equity} + ${totalLiabilities}) = ${valE.toFixed(4)}`;
                break;
            case 'calidad_deuda':
                title = 'Ratio de Calidad de la Deuda';
                question = 'Calcula el ratio de Calidad de la Deuda (cuanto menor, mejor calidad al ser más a l/p).';
                data = { 'Pasivo Corriente': formatCurrency(currentLiabilities), 'Pasivo Total': formatCurrency(totalLiabilities) };
                const valC = currentLiabilities / totalLiabilities;
                solution = formatNumber(valC, 2);
                explanation = `Fórmula: Pasivo Corriente / Pasivo Total = ${currentLiabilities} / ${totalLiabilities} = ${valC.toFixed(4)}`;
                break;
        }

        exercises.push({
            id: generateId('RATIO', i),
            category: 'Ratios Financieros y Patrimoniales',
            title: title,
            question: question,
            data: data,
            solution: solution,
            explanation: explanation
        });
    }

    return exercises;
};
