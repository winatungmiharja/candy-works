import React from 'react';

export enum CandyType {
  'chupa-cupz',
  'dalgona',
  'mentoz',
  'suguz',
}
export type Candy = {
  type: keyof typeof CandyType;
};

export type CandyDataType = {
  url: keyof typeof CandyType;
  name: string;
  sold: number;
  description: React.ReactNode;
  nutrition: React.ReactNode;
  ingredients: React.ReactNode;
};
