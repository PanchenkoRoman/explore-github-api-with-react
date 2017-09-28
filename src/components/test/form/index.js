import React, {Component} from 'react';
import { fetchData, initialState } from "../../../actions/index";
import { Button, TextField }  from 'react-md';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import s from '../Second.module.scss';
let cx = classNames.bind(s);


class Form extends  Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        let val = this.refs.myField.value;
        if(val.length > 0){
            this.props.fetchData(val);
        }
    }

    render(){
        let apiData = this.props.data;
        return(
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
        )
    }
}

function mapStateToProps(state) {
    return{ data: state.data}
}

export default connect(mapStateToProps, { fetchData, initialState })(Form);