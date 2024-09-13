import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 26878,
  login: 'z3rs',
};

export const sampleWithPartialData: IUser = {
  id: 5720,
  login: 'qM@4adx\\&r',
};

export const sampleWithFullData: IUser = {
  id: 14824,
  login: 'e1COyJ',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
