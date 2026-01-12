export interface Exercise {
    id: string;
    category: string;
    title: string;
    question: string;
    data: Record<string, string | number>;
    solution: string;
    explanation?: string;
}

export interface GeneratorConfig {
    count: number;
}
