import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'

const tableRowsCount = 10;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

  const InvoiceItemsTable = ({templates}) => (
    <View style={styles.tableContainer}>
        {/* <InvoiceTableHeader /> */}
        <InvoiceTableRow templates={templates} />
        {/* <InvoiceTableBlankSpace rowsCount={ tableRowsCount - invoice.length} /> */}
        {/* <InvoiceTableFooter items={invoice.items} /> */}
    </View>
  );
  
  export default InvoiceItemsTable