/* eslint-disable prettier/prettier */

export function updateStatus(index: number) {
  fakeData[index].status = !fakeData[index].status;
}
export let fakeData = [
  {
    name: 'CH1',
    title: 'Channel ',
    id: '123123123',
    status: false,
    timer: 2000,
  },
  {
    name: 'CH2',
    title: 'Channel ',
    id: '1231231232',
    status: false,
    timer: 5000,
  },
  {
    name: 'CH3',
    title: 'Channel ',
    id: '1231231233',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH4',
    title: 'Channel ',
    id: '1231231231',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH5',
    title: 'Channel ',
    id: '1231231235',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH6',
    title: 'Channel ',
    id: '12312312325',
    status: false,
    timer: 3000,
  },
  {
    name: 'CH7',
    title: 'Channel ',
    id: '12312131235',
    status: false,
    timer: 1000,
  },
  {
    name: 'CH8',
    title: 'Channel ',
    id: '14231231235',
    status: false,
    timer: 1000,
  },
];
