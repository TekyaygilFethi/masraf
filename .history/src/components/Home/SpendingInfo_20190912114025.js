import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import MaterialTable from 'material-table';
import _ from 'lodash';

class SpendingInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Belge Tarihi', field: 'documentDate', type: 'date' },
                { title: 'Firma Adı', field: 'companyName' },
                { title: 'Ödeme Tipi', field: 'payloadType' },
                { title: 'Belge No', field: 'documentNo' },
                { title: 'Belge Türü', field: 'documentType' },
                { title: 'Harcama Türü', field: 'expenseType' },
                { title: 'Tutar', field: 'amount' },
                { title: 'P.B.', field: 'currency' },
                { title: 'KDV Oranı', field: 'vatRate' },
                { title: 'Açıklama', field: 'explanation' },
            ],
            data: [
                { documentDate: '05.05.2019', companyName: 'Idecon', payloadType: 'Kredi Kartı', documentNo: 63123, documentType: 'Fatura', expenseType: 'Konaklama', amount: 63, currency: 'TRY', vatRate: '%8 Kdv', explanation: 'Yok' },
                { documentDate: '05.05.2019', companyName: 'Idecon', payloadType: 'Kredi Kartı', documentNo: 63123, documentType: 'Fatura', expenseType: 'Konaklama', amount: 63, currency: 'TRY', vatRate: '%8 Kdv', explanation: 'Yok' },
                { documentDate: '05.05.2019', companyName: 'Idecon', payloadType: 'Kredi Kartı', documentNo: 63123, documentType: 'Fatura', expenseType: 'Konaklama', amount: 63, currency: 'TRY', vatRate: '%8 Kdv', explanation: 'Yok' },
            ]
        };
    }


    render() {
        const { columns, data } = this.state;
        return (
            <>
                <div className="card">
                    {
                        _.isEmpty(data) ?
                            <p>Masraf bulunamadı</p> :
                            <MaterialTable
                                title="Editable Example"
                                columns={columns}
                                data={data}
                                editable={{
                                    onRowUpdate: (newData, oldData) => { }
                                    ,
                                    onRowDelete: oldData => { }

                                }}
                                options={{ search: false, paging: false }}
                                actions={[
                                    {
                                        icon: () => 'Yeni masraf ekle',
                                        tooltip: '',
                                        isFreeAction: true
                                    }
                                ]}
                            />
                    }

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
