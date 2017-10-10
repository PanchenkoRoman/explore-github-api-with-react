import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ExpansionList, ExpansionPanel, FontIcon } from 'react-md';
import classNames from 'classnames/bind';
import { selectUser, showBranches } from '../../actions/index';
import s from './Second.module.scss';
import ListOfRepos from './listOfRepos';
import Form from './form';

const cx = classNames.bind(s);

class Test extends Component {
  render() {
    const apiData = this.props.data;
    return (
      <div className="App">
        <Form />
        {
          apiData[0] ?
            <ExpansionList className={cx('md-cell', 'md-cell--12')}>
              <ExpansionPanel
                onClick={() => this.props.selectUser(apiData[0].login)}
                label={`repos of ${apiData[0].name}`}
                expanderIcon={<FontIcon primary>keyboard_arrow_down</FontIcon>}
                footer={null}
              >
                <div className="md-grid">
                  {apiData[1] ? <ListOfRepos /> : null}
                </div>
              </ExpansionPanel>
            </ExpansionList> : null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps, { selectUser, showBranches })(Test);
