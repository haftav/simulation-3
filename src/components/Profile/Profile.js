import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, getUser } from '../../ducks/user';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

        this.updateUser = this.updateUser.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.props.getUser();
        this.setState({
            user: this.props.user
        })
    }

    updateUser(val, type) {
        this.setState({ user: Object.assign({}, this.state.user, { [type]: val }) })
    }

    handleUpdate() {
        this.props.updateUser(this.state.user);
    }

    render() {
        console.log(this.state.user);
        return (
            <div>
                <h1>Profile</h1>
                <button onClick={this.handleUpdate}>Update</button>
                <div></div>
                <div>
                    <h3>First Name</h3>
                    <input onChange={(e) => this.updateUser(e.target.value, 'first_name')}/>
                    <h3>Last Name</h3>
                    <input onChange={(e) => this.updateUser(e.target.value, 'last_name')}/>
                    <h3>Gender</h3>
                    <select onChange={(e) => this.updateUser(e.target.value, 'gender')}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <h3>Hair Color</h3>
                    <select onChange={(e) => this.updateUser(e.target.value, 'hair_color')}>
                        <option value="Brown">Brown</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Red">Red</option>
                        <option value="Blonde">Blonde</option>
                        <option value="White">White</option>
                    </select>
                    <h3>Eye Color</h3>
                    <select onChange={(e) => this.updateUser(e.target.value, 'eye_color')}>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Brown">Brown</option>
                    </select>
                    <h3>Hobby</h3>
                    <select onChange={(e) => this.updateUser(e.target.value, 'hobby')}>
                        <option value="Video Games">Video Games</option>
                        <option value="Hiking">Hiking</option>
                        <option value="Fishing">Fishing</option>
                        <option value="Rafting">Rafting</option>
                    </select>
                    <h3>Birthday Day</h3>
                    <select onChange={(e) => this.updateUser(e.target.value, 'birthday_day')}>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <h3>Birthday Month</h3>
                    <select onChange={(e) => this.updateUser(e.target.value, 'birthday_month')}>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <h3>Birthday Year</h3>
                    <select onChange={(e) => this.updateUser(e.target.value, 'birthday_year')}>
                        <option value="2007">2015</option>
                        <option value="2006">2014</option>
                        <option value="2005">2013</option>
                        <option value="2004">2012</option>
                        <option value="2003">2011</option>
                        <option value="2002">2010</option>
                        <option value="2001">2009</option>
                        <option value="2000">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

let actions = {
    updateUser,
    getUser
}

export default connect(mapStateToProps, actions)(Profile);