import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from 'redux/modules/users';
import {withDone} from 'react-router-server';

class Users extends Component{
    componentWillMount(nextProps){
        const {UserActions, data, done} = this.props;

        if(data.length !== 0) return false;
        UserActions.getUsers().then(done, done);
    }

    render(){
        const {data} = this.props;

        const userList = data.map(user => (
            <li key={user.id}>{user.name}</li>
        ));

        return (
            <div>
                <ul>
                    {userList}
                </ul>
            </div>
        );
    }
}

export default withDone(connect(
    state => ({
        loading: state.users.pending,
        error: state.users.rejected,
        data: state.users.data
    }),
    dispatch => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(Users));