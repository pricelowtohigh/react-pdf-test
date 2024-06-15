import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 'auto',
        fontStyle: 'bold',
    },
    templateName: {
        width: '50%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    templateDescription: {
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingLeft: 8,
        paddingRight: 8,
    },
  });


const PDFTableRow = ({templates}) => {
    const rows = templates.map( (template) => 
        <View style={styles.row} key={template.templateId}>
            <Text style={styles.templateName}>{template.templateName}</Text>
            <Text style={styles.templateDescription}>{template.templateDescription}</Text>
        </View>
    )

    return (<Fragment>{rows}</Fragment> )
    
    
};

export default PDFTableRow