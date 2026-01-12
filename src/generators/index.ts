import type { Exercise } from '../types';
import { generateBreakEvenExercises } from './breakEven';
import { generateWorkingCapitalExercises } from './workingCapital';
import { generateOperatingLeverageExercises } from './operatingLeverage';
import { generateRatioExercises } from './ratios';
import { generateProfitabilityExercises } from './profitability';
import { generateAmortizationExercises } from './amortization';
import { generateFiscalExercises } from './fiscal';
import { generatePMMExercises } from './pmm';

export const generateAllExercises = (): Exercise[] => {
    const countPerType = 20;

    return [
        ...generateBreakEvenExercises(countPerType),
        ...generateOperatingLeverageExercises(countPerType),
        ...generateWorkingCapitalExercises(countPerType),
        ...generateRatioExercises(countPerType),
        ...generateProfitabilityExercises(countPerType),
        ...generateAmortizationExercises(countPerType),
        ...generateFiscalExercises(countPerType),
        ...generatePMMExercises(countPerType)
    ];
};
