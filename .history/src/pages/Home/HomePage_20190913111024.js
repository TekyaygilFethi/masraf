import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import ExpenseForm from '../../components/Form/ExpenseForm'
import Index from '../../components/Home/index'
import Breadcrumb from '../../components/common/Breadcrumb';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: {},
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const result = {};


    result.formData = nextProps.form.ExpenseForm.values;
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
              <ExpenseForm onSubmits={(e) => { e.preventDefault(); console.log(e) }} />
            </div>
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
