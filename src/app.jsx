import React         from 'react';
import ReactDOM      from 'react-dom';
import {HashRouter as Router, Switch,Redirect,Route,Link } from 'react-router-dom';
import Layout        from 'component/layout/index.jsx';
// 页面
import Home          from 'page/home/index.jsx';
import Login         from 'page/login/index.jsx';
import UserList      from 'page/user/index.jsx';
import Errorpage     from 'page/error/index.jsx';

class App extends React.Component{
    render(){
        let LayoutRouter = (
               <Layout>
                    <Switch>
                        {/* Switch 只匹配第一次匹配到的东西 */}
                        <Route exact path="/" component={Home} />
                        <Route path="/product" component={Home} />
                        <Route path="/product.category" component={Home} />
                        <Route path="/user/index" component={UserList} />
                        <Redirect exact from="/user" to="/user/index"/>
                        <Route component={Errorpage} />
                    </Switch>
                </Layout>
            );
        return( 
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />  
                    <Route path="/" render ={props => LayoutRouter }/>
                </Switch>
            </Router>
        )  
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
