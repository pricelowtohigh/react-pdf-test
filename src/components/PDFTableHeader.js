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
        height: '30px',
        textAlign: 'center',
        fontStyle: 'bold',
        marginTop: '25px',
        // flexGrow: 1
    },
    templateName: {
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        marginTop: '6px'
    },
    templateDescription: {
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        marginTop: '6px'
    }
  });

  const PDFTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.templateName}>Template Name</Text>
        <Text style={styles.templateDescription}>Template Description</Text>
    </View>
  );
  
  export default PDFTableHeader