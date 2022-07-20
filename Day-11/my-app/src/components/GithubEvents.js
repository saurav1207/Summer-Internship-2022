import React, { Fragment } from  "react";

class GithubEvents extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // let {} = this.props.events;
        return(
            <Fragment>
                <div className="card">
                    <div className="card-header bg-info text-white">
                        <h3>Github Events</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                this.props.events.map((event) => {
                                    return(
                                        <li className="list-group-item">
                                            <a href="https://github.com/${username}">{event.type}</a>
                                            <li>{event.created_at}</li>
                                            <li>{event.repo.name}</li>
                                            <li>Related Commits</li>
                                            <li> 1 ➡️ Update readme.md</li>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default GithubEvents;