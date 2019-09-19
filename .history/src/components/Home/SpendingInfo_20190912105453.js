import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import MaterialTable from 'material-table';


class SpendingInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: {},
        };
    }


    render() {
        const { columns, data } = this.state;
        return (
            <>
                <div className="card">
                    <MaterialTable
                        title="Editable Example"
                        columns={columns}
                        data={data}
                        editable={{
                            onRowAdd: newData => { }
                            ,
                            onRowUpdate: (newData, oldData) => { }
                            ,
                            onRowDelete: oldData => { }

                        }}
                    />
                </div>
            </>
        );
    }
}

SpendingInfo.propTypes = {
};
SpendingInfo.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpendingInfo);
