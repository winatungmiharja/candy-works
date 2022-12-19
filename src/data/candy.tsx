import { CandyDataType, CandyType } from '@/types/candy.';

export const CandyData: { [key in keyof typeof CandyType]: CandyDataType } = {
  mentoz: {
    url: 'mentoz',
    name: 'Mentoz',
    sold: 100,
    description:
      'Candy with a strong mint flavor provides freshness all day long',
    nutrition: (
      <>
        Total Calories 10 kcal, Calories from Fat 0 kcal, Total Fat 0 g,
        Saturated Fat 0 g, Sodium 0 mg, Total Carbohydrates 3 g, Sugars 2 g,
        Protein 0 g
      </>
    ),
    ingredients: (
      <>
        Sugar, Wheat Glucose Syrup, Hydrogenated Coconut Oil, Rice Starch,
        Natural Flavors, Gum Arabic, Sucrose Esters Of Fatty Acids, Gellan Gum,
        Carnauba Wax, Beeswax
      </>
    ),
  },
  suguz: {
    url: 'suguz',
    name: 'Suguz',
    sold: 100,
    description: 'Sweet candy that spoils your mouth',
    nutrition: (
      <>
        Total Calories 0 kcal, Calories from fat 0 kcal, Total Fat 0 g,
        Saturated Fat 0 g, Protein 0 g, Total Carbohydrate 2 g, Sugars 2 g, Salt
        (Sodium) 0 mg
      </>
    ),
    ingredients: (
      <>
        Sugar, Glucose, Vegetable Fat, Gelling Agent, Synthetic Flavours, Salt,
        Natural Flavour, Vegetable Emulsifier, Natural Colour, Antioxidant,
        Synthetic Colours
      </>
    ),
  },
  dalgona: {
    url: 'dalgona',
    name: 'Dalgona',
    sold: 100,
    description: 'Boost your energy with Dalgona ',
    nutrition: (
      <>
        Total Calories 374 kcal, Protein 14 g, Fat 9 g, Total Carbohydrate 60 g
      </>
    ),
    ingredients: <>Coffee powder, Sugars, Milk, Baking Soda</>,
  },

  'chupa-cupz': {
    url: 'chupa-cupz',
    name: 'Chupa Cupz',
    sold: 100,
    description: 'Round candy that never runs out when sucked',
    nutrition: (
      <>
        Total Calories 30 kcal, Calories from Fat 0 kcal, Total Fat 0 g,
        Saturated Fat 0 g, Protein 0 g, Total Carbohydrates 7 g, Sugar 3 g,
        Natrium 10 mg
      </>
    ),
    ingredients: (
      <>
        Glucose Syrup, Sugars, Wheat Flour, Invert Sugar, Acidity Regulator,
        Hydrogenated Coconut Oil, Flavour, Colours (Tartazine, Allura Red AC,
        Briliant Blue FCF, Sunset Yellow, CFC)
      </>
    ),
  },
};
