import React, { Fragment, useEffect, useState } from 'react';
import { usePDF, Page, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import BillTo from './BillTo'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'


    const styles = StyleSheet.create({
        page: {
            fontFamily: 'Helvetica',
            fontSize: 11,
            paddingTop: 30,
            paddingLeft:30,
            paddingRight:30,
            lineHeight: 1.5,
            flexDirection: 'column',
        }, 
        logo: {
            width: 74,
            height: 66,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    });

    const Invoice = ({templates}) => (
        
            <Document>
                <Page size="A4" style={styles.page}>
                    <InvoiceTitle title='Negative Invoice Report'/>
                    <InvoiceItemsTable templates={templates} />
                </Page>
            </Document>
    );

export default Invoice