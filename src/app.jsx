import React from 'react';
import ReactDOM  from 'react-dom';

import {HashRouter as Router, Switch,Redirect,Route,Link } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';

 <Layout>
                <Switch>
                    {/* Switch 只匹配第一次匹配到的东西 */}
                <Route exact path="/" component={Home} />
                <Route path="/product" component={Home} />
                <Route path="/product.category" component={Home} />
                </Switch>
            </Layout>

class App extends React.Component{
    render(){
        return(
          <Router>
            <Switch>
            <Route path="/login" component={Login} />  
            <Route path="/" component={props =>(
                <Layout>
                    <Switch>
                        {/* Switch 只匹配第一次匹配到的东西 */}
                        <Route exact path="/" component={Home} />
                        <Route path="/product" component={Home} />
                        <Route path="/product.category" component={Home} />
                    </Switch>
                </Layout>
            )
        } />  
           
            </Switch>
          </Router>

        );
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
