import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    partNature: {
        width: '30%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    partNumber: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qoh: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    negLoc: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    primeLoc: {
        width: '15%',
    }
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.partNature}>Part Nature</Text>
        <Text style={styles.partNumber}>Part #</Text>
        <Text style={styles.qoh}>QOH</Text>
        <Text style={styles.negLoc}>Negative Loc.</Text>
        <Text style={styles.primeLoc}>Prime Loc.</Text>
    </View>
  );
  
  export default InvoiceTableHeader