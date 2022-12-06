import { CandyDataType, CandyType } from '@/types/candy.';

export const CandyData: { [key in keyof typeof CandyType]: CandyDataType } = {
  mentoz: {
    url: 'mentoz',
    name: 'Mentoz',
    sold: 100,
    description: 'lorem ipsum',
    nutrition: (
      <>
        <p>lala</p>
      </>
    ),
    ingredients: (
      <>
        <p>lala</p>
      </>
    ),
  },
  suguz: {
    url: 'suguz',
    name: 'Suguz',
    sold: 100,
    description: 'lorem ipsum',
    nutrition: (
      <>
        <p>lala</p>
      </>
    ),
    ingredients: (
      <>
        <p>lala</p>
      </>
    ),
  },
  dalgona: {
    url: 'dalgona',
    name: 'Dalgona',
    sold: 100,
    description: 'lorem ipsum',
    nutrition: (
      <>
        <p>lala</p>
      </>
    ),
    ingredients: (
      <>
        <p>lala</p>
      </>
    ),
  },

  'chupa-cupz': {
    url: 'chupa-cupz',
    name: 'Chupa Cupz',
    sold: 100,
    description: 'lorem ipsum',
    nutrition: (
      <>
        <p>lala</p>
      </>
    ),
    ingredients: (
      <>
        <p>lala</p>
      </>
    ),
  },
};
