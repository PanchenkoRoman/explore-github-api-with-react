import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {fetchData, selectUser, initialState}  from "../../actions/index";
import s from './Second.module.scss';
import classNames from 'classnames/bind';
import {Button, TextField, List, ListItem, ExpansionList, ExpansionPanel}  from 'react-md';

let cx = classNames.bind(s);

class Test extends Component {

    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();

        let val = this.refs.myField.value;
        if(val.length > 0){
            this.props.fetchData(val);
        }
    }

    showList(){
        return this.props.data[1].map((repos) =>{
            return(
                <ListItem key={repos.id} primaryText={repos.name} />
            );
        })
    }

    render() {
        let apiData = this.props.data;

        return (
            <div className="App">

                <form onSubmit={this.onFormSubmit}>
                    <div className="md-grid">
                        <TextField
                            ref="myField"
                            id="floating-center-title"
                            label="Login"
                            lineDirection="center"
                            placeholder="Enter your login"
                            className="md-cell"
                        />
                        <Button type='submit'
                                flat primary swapTheming
                                className="md-cell--bottom"
                                disabled={apiData[0] ? true : false}
                        >
                            Search
                        </Button>
                        <Button flat secondary swapTheming
                                className={cx("md-cell--bottom", "button-margin")}
                                onClick={() => this.props.initialState()}
                        >
                            Reset
                        </Button>
                    </div>
                </form>

                {/*<ExpansionList className='md-cell md-cell--12'>*/}
                    {/*<ExpansionPanel onClick={() => this.props.selectUser(apiData[0].login)}*/}
                                    {/*label={apiData[0] ? `repos of ${apiData[0].name}` : ''}*/}
                                    {/*footer={null}*/}
                                    {/*>*/}
                        {/*<div className="md-grid">*/}
                            {/*{*/}
                                {/*apiData[1] ?*/}
                                    {/*<List className="md-cell md-paper md-paper--1">*/}
                                        {/*{this.showList()}*/}
                                    {/*</List> : null*/}
                            {/*}*/}
                        {/*</div>*/}
                    {/*</ExpansionPanel>*/}
                {/*</ExpansionList>*/}

                <div className='text md-display-1'>
                    <h1 onClick={() => this.props.selectUser(apiData[0].login)}
                        className={cx('md-text-center', 'cursor')}
                    >{apiData[0] ? apiData[0].name : ''}</h1>
                </div>

                <div className="md-grid">
                    {
                        apiData[1] ?
                        <List className="md-cell md-paper md-paper--1">
                           {this.showList()}
                        </List> : null
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{ data: state.data}
}

export default connect(mapStateToProps, {fetchData, selectUser, initialState})(Test);
