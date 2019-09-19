import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


import Index from '../../components/Home/index'


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: {},
    };
  }


  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-12">

          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <Index.PersonalInfo />
          </div>
          <div className="col-sm-5">
            <Index.ApproverInfo />
          </div>
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
};
HomePage.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
