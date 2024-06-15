import React, { useEffect, useState } from 'react';
import { PDFViewer, BlobProvider, PDFDownloadLink } from '@react-pdf/renderer'
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
  
  return (
    <BlobProvider document={<PDF templates={templates} />}>
      {({ blob, url, loading, error }) => (
          <>
              {/* <PDFDownloadLink document={<PDF templates={templates} />} fileName="my-document.pdf">
                  {({ blob, url, loading, error }) => (
                      loading ? 'Loading document...' : 'Download'
                  )}
              </PDFDownloadLink> */}

              {/* Optionally display the PDF in the browser */}
              {!loading && !error && (
                  <iframe src={url} width="100%" height="800px" />
              )}
          </>
      )}
    </BlobProvider>
  );
}

export default App;