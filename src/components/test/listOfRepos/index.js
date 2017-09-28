import React, {Component} from 'react';
import  {showBranches}  from "../../../actions/index";
import { connect } from 'react-redux';
import {ExpansionPanel, FontIcon, ExpansionList}  from 'react-md';

class ListOfRepos extends Component {
    render(){
        let apiData = this.props.data;
        return (
            <ExpansionList>
                {
                    apiData[1].map((repos) => {
                        return (
                            <ExpansionPanel
                                onClick={() => this.props.showBranches(repos.branches_url)}
                                key={repos.id}
                                label={`see branches of the ${repos.name} repo`}
                                expanderIcon={<FontIcon primary>keyboard_arrow_down</FontIcon>}
                                footer={null}>
                                <h3>Branches:</h3>
                                {
                                    apiData[2] ? apiData[2].map(branch => (<p key={branch.name}>{branch.name}</p>)) : null
                                }
                            </ExpansionPanel>
                        );
                    })
                }
            </ExpansionList>
        );
    }
}

function mapStateToProps(state) {
    return{ data: state.data}
}

export default connect(mapStateToProps, {showBranches})(ListOfRepos);