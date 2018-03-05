// @flow

import LoadObject from '../utils/LoadObject';
import type {Entry, State} from './store.flow';

const tags = ['healty', 'stuff', 'healty', 'stuff', 'and', 'more'];

const loaded: LoadObject<Entry> = LoadObject.loaded({
  id: 1,
  calories: 100,
  ts: Date.now(),
  tags,
  image: 1,
});

const loadingEmpty: LoadObject<Entry> = LoadObject.loading();

const loadingPartial: LoadObject<Entry> = LoadObject.loading({
  id: 3,
  calories: 100,
  ts: Date.now(),
  tags,
  image: 1,
});

const editing: LoadObject<Entry> = LoadObject.updating({
  id: 4,
  calories: 100,
  ts: Date.now(),
  tags,
  image: 2,
})

export default function getInitialState(): State {
  return ({
    images: {
      '1': LoadObject.loaded('https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'),
      '2': LoadObject.loading(),
    },
    entries: {
      '1': loaded,
      '2': loadingEmpty,
      '3': loadingPartial,
      '4': editing,
    },
    days: {
      '1': {
        id: 1,
        entry_ids: [1, 2, 3, 4],
        ts: Date.now(),
        progress: 10,
        goal: 1000,
      },
      '2': {
        id: 1,
        entry_ids: [2, 1, 4],
        ts: Date.now(),
        progress: 10,
        goal: 1000,
      },
      '3': {
        id: 1,
        entry_ids: [4, 3, 1],
        ts: Date.now(),
        progress: 10,
        goal: 1000,
      },
    },
    active_days: [1, 2, 3],
    profile: LoadObject.loading(),
  }: any);
}
