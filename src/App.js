import React, { Component, Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, BlobProvider, PDFDownloadLink } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';

import { createRoot } from 'react-dom/client';
import PDF from './components/PDF'
import './App.css';

function App() {

  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://apiqa.metroalivemanager.com/guest/page-template');
        const data = await response.json();
        setTemplates(data);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.essage}</div>
  }

  
  
  return (
    <BlobProvider document={<PDF templates={templates} />}>
      {({ blob, url, loading, error }) => (
          <>
              <PDFDownloadLink document={<PDF templates={templates} />} fileName="my-document.pdf">
                  {({ blob, url, loading, error }) => (
                      loading ? 'Loading document...' : 'Download'
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

  // const container = document.getElementById('root');
  // const root = createRoot(container)
  // root.render(<App/>)
  //ReactPDF.render(<App />);

export default App;