import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import PDFTableRow from './PDFTableRow'

const tableRowsCount = 10;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // marginTop: 16,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

  const PDFItemsTable = ({templates}) => (
    <View style={styles.tableContainer}>
        <PDFTableRow templates={templates} />
    </View>
  );
  
  export default PDFItemsTable