import React, { useEffect, useState } from "react";
//import { Route, Switch } from "react-router-dom";
import Invoice from "./Invoice";
//import invoice from './data/invoice'

import {PDFViewer} from '@react-pdf/renderer'

function Layout ({templates}) {

    //console.log(templates)
    // const [templates, setTemplates] = useState([])

    // useEffect(() => {
    //     const url = 'https://apiqa.metroalivemanager.com/guest/page-template';
        
    //     fetch(url)
    //       .then((response) => response.json())
    //       .then((response) => {
    //           setTemplates([response])
    //           console.log('setTemplates')
    //       })
    //     console.log('post fetch')
    //   }, [])

    if (templates) {
        return (
            <div>
              <div className="container">
                  {/* <Switch>
                      <Route path="/"> */}
                          <Invoice templates={templates}/>                    
                      {/* </Route>
                  </Switch> */}
              </div>
            </div>
          )
    }
    
}

export default Layout