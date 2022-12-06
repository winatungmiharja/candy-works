import { CandyDataType, CandyType } from '@/types/candy.';

export const CandyData: { [key in keyof typeof CandyType]: CandyDataType } = {
  dalgona: {
    url: 'dalgona',
    name: 'Chupa Cupz',
    sold: 100,
    description: 'lorem ipsum',
  },
  mentoz: {
    url: 'mentoz',
    name: 'Chupa Cupz',
    sold: 100,
    description: 'lorem ipsum',
  },
  'chupa-cupz': {
    url: 'chupa-cupz',
    name: 'Chupa Cupz',
    sold: 100,
    description: 'lorem ipsum',
  },
  suguz: {
    url: 'suguz',
    name: 'Chupa Cupz',
    sold: 100,
    description: 'lorem ipsum',
  },
};

export const TopPicks = [];
