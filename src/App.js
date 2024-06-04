import React, { Component, Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {PDFViewer} from '@react-pdf/renderer'
import Layout from './components';
import { createRoot } from 'react-dom/client';
import Invoice from './components/Invoice'
import invoice from './data/invoice'

// import logo from './logo.svg';
import './App.css';

function App() {

  const [templates, setTemplates] = useState([])

    useEffect(() => {
      const url = 'https://apiqa.metroalivemanager.com/guest/page-template';
      fetch(url)
          .then((response) => response.json())
          .then((response) => {
              //console.log(response)
              setTemplates([response])
          })

      //console.log(templates)
    }, [])

  
  //render() {  // react-pdf sepecific?
    return (
        <Fragment>
            <PDFViewer width="1600" height="900" className="app" >
                <Layout templates={templates}/>
            </PDFViewer>
        </Fragment>
    );
  }

  const container = document.getElementById('root');
  const root = createRoot(container)
  root.render(<App/>)

export default App;