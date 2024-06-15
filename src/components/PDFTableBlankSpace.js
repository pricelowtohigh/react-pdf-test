import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        color: 'white'
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
    negativeLoc: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    primeLoc: {
        width: '15%',
    }
   
  });

const PDFTableBlankSpace = ({rowsCount}) => {
    const blankRows = Array(rowsCount).fill(0)
    const rows = blankRows.map( (x, i) => 
        <View style={styles.row} key={`BR${i}`}>
            <Text style={styles.partNature}>-</Text>
            <Text style={styles.partNumber}>-</Text>
            <Text style={styles.qoh}>-</Text>
            <Text style={styles.negativeLoc}>-</Text>
            <Text style={styles.primeLoc}>-</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default PDFTableBlankSpace