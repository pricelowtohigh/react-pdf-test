import React from 'react';
   import { pdf, version, Font, StyleSheet } from '../index'; // Assuming this imports the core react-pdf components
   import BlobProvider from './BlobProvider';
   import PDFDownloadLink from './PDFDownloadLink';

   function MyPDFComponent() {
       // ... your PDF content using react-pdf components ...

       return (
           <BlobProvider document={<MyDocument />}>
               {({ blob, url, loading, error }) => (
                   <>
                       <PDFDownloadLink document={<MyDocument />} fileName="my-document.pdf">
                           {({ blob, url, loading, error }) => (
                               loading ? 'Loading document...' : 'Download now!'
                           )}
                       </PDFDownloadLink>

                       {/* Optionally display the PDF in the browser */}
                       {!loading && !error && (
                           <iframe src={url} width="100%" height="600px" />
                       )}
                   </>
               )}
           </BlobProvider>
       );
   }






   import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument'; // Your PDF content component

function App() {
  return (
    <BlobProvider document={<MyDocument />}>
      {({ blob, url, loading, error }) => (
        <>
          {loading && <div>Loading document...</div>}
          {error && <div>Error: {error.message}</div>}
          {!loading && !error && (
            <PDFDownloadLink document={<MyDocument />} fileName="my-document.pdf">
              {({ blob, url, loading, error }) => (
                loading ? 'Loading document...' : 'Download now!'
              )}
            </PDFDownloadLink>
          )}
        </>
      )}
    </BlobProvider>
  );
}