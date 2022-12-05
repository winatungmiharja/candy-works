export enum CandyType {
  'chupa-cupz',
  'dalgona',
  'mentoz',
  'suguz',
}
export type Candy = {
  type: keyof typeof CandyType;
};
