import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import MaterialTable from 'material-table';


class SpendingInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
            ],
            data: [
                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            ]
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
                            onRowUpdate: (newData, oldData) => { }
                            ,
                            onRowDelete: oldData => { }

                        }}
                        options={{ search: false }}
                        actions={[
                            {
                                icon: () => 'Yeni masraf ekle',
                                tooltip: '',
                                isFreeAction: true
                            }
                        ]}
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
