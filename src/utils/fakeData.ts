/* eslint-disable prettier/prettier */

export function updateStatusOff(index: number) {
  fakeData[index].status = false;
}

export function updateList(newList: any[]) {
  fakeData = newList;
}

export let fakeData = [
  {
    name: 'CH1',
    title: 'Channel 1',
    id: '123123123',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH2',
    title: 'Channel 2',
    id: '1231231232',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH3',
    title: 'Channel 3',
    id: '1231231233',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH4',
    title: 'Channel 4',
    id: '1231231231',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH5',
    title: 'Channel 5',
    id: '1231231235',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH6',
    title: 'Channel 6',
    id: '12312312325',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH7',
    title: 'Channel 7',
    id: '12312131235',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH8',
    title: 'Channel 8',
    id: '14231231235',
    status: false,
    timer: 1000,
  },
];

export const listTimer = [
  'ON',
  'OFF',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
];
