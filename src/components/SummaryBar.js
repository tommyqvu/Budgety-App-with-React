import React from 'react';
import classes from '../App.module.css';
import formatNumber from "../utils/utility"
const SummaryBar = props => {
  return (
    <div
      className={
        props.type === 'inc' ? classes.budget__income : classes.budget__expenses
      }
    >
      <div
        className={
          props.type === 'inc'
            ? classes.budget__income__text
            : classes.budget__expenses__text
        }
      >
        {props.type === 'inc' ? 'Income' : 'Expense'}
      </div>
      <div
        className={
          props.type === 'inc' ? classes.right : classes.right__clearfix
        }
      >
        <div
          className={
            props.type === 'inc'
              ? classes.budget__income__value
              : classes.budget__expenses__value
          }
        >
          {formatNumber(props.amount, props.type)}
        </div>
        {props.type === 'exp' && (
          <div className={classes.budget__expenses__percentage}>{formatNumber(props.percentage)} %</div>
        )}
      </div>
    </div>
  );
};


export default SummaryBar;
