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
    },
    partNature: {
        width: '50%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    partNumber: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    qoh: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    // negativeLoc: {
    //     width: '15%',
    //     borderRightColor: borderColor,
    //     borderRightWidth: 1,
    //     textAlign: 'right',
    //     paddingRight: 8,
    // },
    // primeLoc: {
    //     width: '15%',
    //     textAlign: 'right',
    //     paddingRight: 8,
    // }
  });


const InvoiceTableRow = ({templates}) => {
    console.log(templates)
    const rows = templates.map( (template) => 
        <View style={styles.row} >
            <Text style={styles.partNature}>{template.templateDescription}</Text>
            <Text style={styles.partNumber}>{template.templateName}</Text>
            <Text style={styles.qoh}>{template.temmplateId}</Text>
            {/* <Text style={styles.negativeLoc}>{item.negativeLoc}</Text>
            <Text style={styles.primeLoc}>{item.primeLoc}</Text> */}
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};

export default InvoiceTableRow