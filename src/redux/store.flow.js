// @flow

import LoadObject from '../utils/LoadObject';

type DayID = number;
type EntryID = number;
type ImageID = number;
type AccountID = number;

export type FoodImage = string;

export type Entry = {|
  id: EntryID,
  image: ImageID,
  tags: Array<string>,
  calories: number,
  ts: number,
|};

type Day = {|
  id: DayID,
  entry_ids: Array<EntryID>,
  ts: number,
  progress: number,
  goal: number,
|};

type Account = {|
  id: AccountID,
  name: string,
  by_day_goal: number,
|};

export type State = {|
  images: {[key: ImageID]: LoadObject<Image>},
  entries: {[key: EntryID]: LoadObject<Entry>},
  days: {[key: DayID]: Day},
  active_days: Array<DayID>,
  profile: LoadObject<Account>
|};

export type Action = {type: 'ACTION'};
