import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser, getRecommended } from '../../ducks/user';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'first_name'
        }

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
            let body = {};
            let keyword = this.state.filter;
            let value = this.props.user[keyword];
            this.props.getUser();
            this.props.getRecommended(keyword, value, this.props.user.id)
    }
    
    handleFilterChange(val) {
        this.setState({ filter: val })
        let keyword = val;
        let value = this.props.user[keyword]
        this.props.getRecommended(keyword, value, this.props.user.id)
        // console.log(this.props.user[this.state.filter])
    }

    render() {
        console.log(this.props.user);
        const recommends = this.props.recommends.map((el, idx) => {
            return (
                <div>
                    <p>{el.first_name}</p>
                    <p>{el.last_name}</p>
                    <p>{el.hobby}</p>
                    
                </div>
            )
        })
        
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to='/profile'><button>Profile</button></Link>
                <a href='http://localhost:3005/api/auth/logout'>Log Out</a>
                <select onChange={(e) => this.handleFilterChange(e.target.value)}>
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="gender">Gender</option>
                    <option value="hobby">Hobby</option>
                    <option value="hair_color">Hair Color</option>
                    <option value="eye_color">Eye Color</option>
                    <option value="birthday">Birthday</option>
                </select>
                { recommends }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user, recommends } = state;
    return {
        user,
        recommends
    }
}

let actions = {
    getUser,
    getRecommended
}

export default connect(mapStateToProps, actions)(Dashboard);