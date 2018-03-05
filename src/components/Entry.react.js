// @flow

import React, {Component} from 'react';
import FImage from './FImage.react';
import type LoadObject from '../utils/LoadObject';
import type {Entry} from '../redux/store.flow';

import "./Feed.css"

type Props = {|
  entry: LoadObject<Entry>,
|};

function Controls(): React$Node {
  return (
    <div className="Controls">
      C
    </div>
  );
}

function Loader(): React$Node {
  return (
    <div className="Loader"></div>
  );
}

function Information(): React$Node {
  return (
    <div className="Information">
      <div className="Calories"> 500 Cal </div>
      <div className="Time"> 10:00 </div>
      <ul className= "Tags">
        <li>Healthy</li>
        <li>Stuff</li>
        <li>Healthy</li>
        <li>Stuff</li>
        <li>Healthy</li>
        <li>Stuff</li>
        <li>Healthy</li>
        <li>Stuff</li>
        <li>+</li>
      </ul>
    </div>
  );
}

function EntryComponent({entry}: Props): React$Node {
  return (
    <div className="Entry">
    {entry.apply({
      loaded: e => [
        <div className="Relative" key='box'>
          <Controls />
          <FImage id={e.image} />
        </div>,
        <Information key='info' />,
      ],
      loading: e => [
        <div className="Relative" key='box'>
          <Controls />
          <FImage id={e && e.image} />
          <Loader />
        </div>,
        <Information key='info' />,
      ],
      error: e =>
        <div> Error </div>,
    })}
    </div>
  );
}

export default EntryComponent;
