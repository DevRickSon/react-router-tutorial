import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, About, Posts, Users} from 'pages/index';
import {Helmet} from 'react-helmet';
import Menu from 'components/Menu';

class App extends Component{
    render(){
        return (
            <div>
                <Helmet>
                    <title>React Router & SSR</title>
                </Helmet>
                <Menu />
                <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/posts" component={Posts} />
                <Route path="/users" component={Users} />
            </div>
        );
    }
}

export default App;