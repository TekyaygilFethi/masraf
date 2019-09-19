import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import swal from 'sweetalert2';
// import { toast } from 'react-toastify';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { sampleAction } from '../../redux/modules/sample';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: {},
    };

    this.props.sampleAction('mikdatdogru');
  }

  static getDerivedStateFromProps(nextProps) {
    const result = {};
    if (nextProps.sample.isLoaded) {
      result.sample = nextProps.sample;
    }

    return { ...result };
  }

  render() {
    return (
      <div>
        selam
      </div>
    );
  }
}

HomePage.propTypes = {
  sampleAction: PropTypes.func.isRequired,
};
HomePage.defaultProps = {};

const mapStateToProps = state => ({
  sample: state.sample,
});
const mapDispatchToProps = {
  sampleAction,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
