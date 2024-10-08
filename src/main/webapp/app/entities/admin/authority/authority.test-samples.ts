import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '149d8fb8-59d0-4dd7-b545-809a0ddd84b1',
};

export const sampleWithPartialData: IAuthority = {
  name: '5ef28532-1a9d-4543-b486-22e64aabec14',
};

export const sampleWithFullData: IAuthority = {
  name: '33c8167a-9ad0-4824-9b1a-23449ea9fa57',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
