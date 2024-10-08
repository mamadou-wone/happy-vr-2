import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3546,
  login: 'w9@g',
};

export const sampleWithPartialData: IUser = {
  id: 22339,
  login: 'kjQs',
};

export const sampleWithFullData: IUser = {
  id: 28665,
  login: 'Qt',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
