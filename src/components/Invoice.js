import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
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
  
  const Invoice = ({invoice}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                    {/* <Image style={styles.logo} src={logo} /> */}
                    <InvoiceTitle title='Negative Invoice Report'/>
                    {/* <InvoiceNo invoice={invoice}/>
                    <BillTo invoice={invoice}/> */}
                    <InvoiceItemsTable invoice={invoice} />
                </Page>
            </Document>
        );
  
  export default Invoice