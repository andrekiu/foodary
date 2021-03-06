// @flow

export function nullthrows<T>(d: ?T): T {
  if (!d) {
    throw new Error('something should be not null');
  }

  return d;
}
