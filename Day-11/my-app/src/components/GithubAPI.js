import React, { Fragment } from 'react'
import GithubProfile from './GithubProfile';
import Axios from "axios";
// import { clientId, clientSecret } from './GithubCredentials';
import GithubEvents from './GithubEvents';
import GithubRepos from './GithubRepos';

class GithubAPI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            profile : null,
            events : null,
            repos : null
        }

    }

    // Two way data binding with username
    updateInput = (e) => {
        this.setState({
            ...this.state,
            username : e.target.value
        });
    };

    // Form Submission
    searchUser = (e) =>{
        e.preventDefault();
        this.searchProfile();
        this.searchRepos();
    };

    // Search a Profile
    searchProfile = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}`)
        .then((response) => {
            this.setState({
                profile : response.data
            });
        }).catch((err) => {
            console.error(err);
        });
    };

    // Search Events
    searchRepos = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}/events`)
        .then((response) =>{
            this.setState( {
                events : response.data
            });
        }).catch((err) => {
            console.error(err);
        });
    };

    // Search Repos
    searchRepos = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}/repos`)
        .then((response) =>{
            this.setState( {
                repos : response.data
            });
        }).catch((err) => {
            console.error(err);
        });
    };



    render(){
        return (
            <Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Github User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form className='form-inline' onSubmit={this.searchUser}>
                                        <div className='form-group'>
                                            <input 
                                                value={this.state.username}
                                                onChange={this.updateInput}
                                                size="50" 
                                                type="text" 
                                                className='form-control' 
                                                placeholder='Enter Username' 
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="submit"
                                                value="Search" 
                                                className='btn bg-secondary text-white mx-3'
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile ? 
                                <GithubProfile profile={this.state.profile} /> : null
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.events ? 
                                <GithubEvents events ={this.state.events} /> : null
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos ? 
                                <GithubRepos repos ={this.state.repos} /> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GithubAPI;