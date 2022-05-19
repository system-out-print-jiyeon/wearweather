import { Fragment, useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, useLocation} from 'react-router-dom';

function Routes() {
  const location = useLocation();

  return (
    <Fragment> 
        <Switch> 
            
          {/* 오류 */}
          {/* <Route key="/error" path="/error" component={ErrorPage} exact /> */}
          {/* 디바이스 변경 */}
          {/* <Route key="/info/changeDevice" path="/info/changeDevice" component={DeviceChange} exact />   */}
         
          <Redirect to="/main" />
        </Switch>
    </Fragment>
  );
}

export default Routes;
