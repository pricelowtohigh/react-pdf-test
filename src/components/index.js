import React, { useEffect, useState } from "react";
//import { Route, Switch } from "react-router-dom";
import Invoice from "./Invoice";
//import invoice from './data/invoice'

function Layout ({templates}) {

    console.log(templates)

    return (
      <div>
        <div className="container">
            {/* <Switch>
                <Route path="/"> */}
                    <Invoice templates={templates[0]}/>
                {/* </Route>
            </Switch> */}
        </div>
      </div>
    )
}

export default Layout