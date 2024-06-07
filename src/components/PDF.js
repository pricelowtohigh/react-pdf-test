import React, { Fragment, useEffect, useState } from 'react';
import { usePDF, Page, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import PDFTitle from './PDFTitle'
import PDFItemsTable from './PDFItemsTable'


    const styles = StyleSheet.create({
        page: {
            fontFamily: 'Helvetica',
            fontSize: 11,
            paddingTop: 30,
            paddingLeft:30,
            paddingRight:30,
            lineHeight: 1.5,
            flexDirection: 'column',
        }
    });

    const PDF = ({templates}) => (
        
            <Document>
                <Page size="A4" style={styles.page}>
                    <PDFTitle title='Dummy PDF'/>
                    <PDFItemsTable templates={templates} />
                </Page>
            </Document>
    );

export default PDF