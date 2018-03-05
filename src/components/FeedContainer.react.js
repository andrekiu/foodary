// @flow

import {connect} from 'react-redux';
import React, {Component} from 'react';
import HeaderContainer from './HeaderContainer.react';
import Entry from './Entry.react';
import DaySummary from './DaySummary.react';

import type {State} from '../redux/store.flow';

import "./Feed.css";


type Props = State;

class FeedContainer extends Component<Props, {}> {
  render(): React$Node {
    const feed = [];
    const {active_days, days, entries, images} = this.props;
    active_days.forEach(dayID => {
      feed.push(<DaySummary key={dayID} />);
      days[dayID].entry_ids.forEach(entryID => {
        feed.push(
          <Entry key={`${dayID}-${entryID}`} entry={entries[entryID]} />
        );
      });
    });
    return (
      <div>
        <HeaderContainer />
        <div className="Feed">
          {feed}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({})
)(FeedContainer);
