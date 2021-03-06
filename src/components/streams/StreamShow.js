import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  render() {
    if (!this.props.stream) return <div>Loading...</div>;

    const { title, description } = this.props.stream;

    return (
      <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
