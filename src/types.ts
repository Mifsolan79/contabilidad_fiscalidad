export interface Exercise {
    id: string;
    category: string;
    title: string;
    question: string;
    data: Record<string, string | number>;
    solution: string;
    explanation?: string;
    correctValue?: number | string;
    valueType?: 'currency' | 'number' | 'text' | 'percentage';
}

export interface GeneratorConfig {
    count: number;
}
