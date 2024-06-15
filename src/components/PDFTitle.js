import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'center'
    },
    reportTitle:{
        color: 'black',
        letterSpacing: 1,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
  });


  const PDFTitle = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
  
  export default PDFTitle