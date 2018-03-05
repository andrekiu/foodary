// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {FoodImage, State} from '../redux/store.flow';
import LoadObject from '../utils/LoadObject';

const LOADING = {image: LoadObject.loading()};

class AbstractImageBox<Props: {content: string}> extends Component<Props> {
  __getStyle(props: Props): {[key: string]: string} {
    return {};
  }

  render() {
    return (
      <div className="Image" style={this.__getStyle(this.props)}>
        {this.props.content}
      </div>
    );
  }
}

class ImageBox extends AbstractImageBox<{content: string, src: string}> {
  __getStyle(props) {
    return {
      'background-image': `url(${props.src})`,
      'background-size': 'cover',
    };
  }
}

function ImageComponent({image}: {image: LoadObject<FoodImage>}): React$Node {
  return image.apply({
    loaded: src => <ImageBox content="loaded" src={src}/>,
    loading: () => <AbstractImageBox content="spinner" />,
    error: () => <AbstractImageBox content="error" />,
  });
}

export default connect(
  state => state,
  () => ({}),
  (state: State, handlers, props: {id: ?number}) => {
    const id = props.id;
    if (!id || !state.images[id]) {
      return LOADING;
    }
    return {image: state.images[id]};
  },
)(ImageComponent);
