declare function clear(): void;
declare function addFunc(latex: string): void;
declare function addTable(x: number[], y: number[]): void;
declare function addTable2(f: (x: number) => number, min = 0, max = 5, step = 1): void;
declare const calculator: Desmos.Calculator;