import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '1039946f-d228-411e-9932-e3dca84f96c1',
};

export const sampleWithPartialData: IAuthority = {
  name: '1349859b-0bdd-42bf-9c7d-724e7f8d57de',
};

export const sampleWithFullData: IAuthority = {
  name: 'f05c5cc9-5f9c-41e8-ab6b-1a8b9930d3f1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
