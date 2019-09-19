import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import _ from 'lodash';
import ExpenseForm from '../../components/Form/ExpenseForm'
import Index from '../../components/Home/index'
import Breadcrumb from '../../components/common/Breadcrumb';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: {},
      formData: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const result = {};

    if (!_.isUndefined(nextProps.form.ExpenseForm)) {

      result.formData = nextProps.form.ExpenseForm.values;
    }
    return result;
  }


  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-12">
            <Breadcrumb from={<FormattedMessage id="sidebar.menu1" />} isFromActive={false} />
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
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <ExpenseForm handleSubmit={(e) => { e.preventDefault(); console.log(e) }} />
            </div>
            {JSON.stringify(this.state.formData, 2)}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Index.SpendingInfo />
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
  form: state.form
});
const mapDispatchToProps = {
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
