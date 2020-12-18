import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Checkbox extends Component {
  render() {
    return (
      <Styled
        className={this.props.className}
        onClick={() => this.props.onChange(!this.props.checked)}
      >
        <input
          type="checkbox"
          checked={this.props.checked}
        />
        <label>{this.props.label}</label>
      </Styled>
    );
  }

  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
  }
}

export default Checkbox;

const Styled = styled.div`
  display: block;
  > input {
    opacity: 0;
    width: 0px;
  }
  > input + label {
    position: relative;
    padding-left: 36px;
    font-size: 14px;
    color : ${props => props.theme.themeMode==="#fff"? "#222!important":"#eee"} ;
    font-weight: 400;
    cursor: pointer;    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: -4px;
      width: 25px;
      height: 25px;
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; 
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -15px;
      left: 7px;
      font-size: 16px;
      color: #fff;
      transition: all .2s;
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; 
        transform: scale(0); 
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; 
      transform: scale(1); 
    }
  }
  > input:checked + label {
    &:before {
      background-color: ${props => props.theme.color};
      border: 1px dotted ${props => props.theme.color};
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;