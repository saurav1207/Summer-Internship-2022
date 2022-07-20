import React, { Fragment } from "react";

class GithubProfileDetails extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let {followers, public_repos, public_gists, following, name, location, email, company, blog, created_at,  html_url} = this.props.profile;
        return (
            <Fragment>
                <div className="card">
                    <div className="card-header bg-light">
                        <span className="badge badge-primary mx-2">Followers : {followers}</span>
                        <span className="badge badge-success mx-2">Repos : {public_repos}</span>
                        <span className="badge badge-warning mx-2">Gists : {public_gists}</span>
                        <span className="badge badge-danger mx-2">Following : {following}</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Name : {name}</li>
                            <li className="list-group-item">Location : {location}</li>
                            <li className="list-group-item">Email : {email}</li>
                            <li className="list-group-item">Company : {company}</li>
                            <li className="list-group-item">Blog : {blog}</li>
                            <li className="list-group-item">Member Since : {created_at}</li>
                            <li className="list-group-item">Profile URL : {html_url}</li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default GithubProfileDetails;