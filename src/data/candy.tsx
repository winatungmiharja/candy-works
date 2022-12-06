import { CandyDataType, CandyType } from '@/types/candy.';

export const CandyData: { [key in keyof typeof CandyType]: CandyDataType } = {
  mentoz: {
    url: 'mentoz',
    name: 'Mentoz',
    sold: 100,
    description: 'lorem ipsum',
  },
  suguz: {
    url: 'suguz',
    name: 'Suguz',
    sold: 100,
    description: 'lorem ipsum',
  },
  dalgona: {
    url: 'dalgona',
    name: 'Dalgona',
    sold: 100,
    description: 'lorem ipsum',
  },

  'chupa-cupz': {
    url: 'chupa-cupz',
    name: 'Chupa Cupz',
    sold: 100,
    description: 'lorem ipsum',
  },
};
