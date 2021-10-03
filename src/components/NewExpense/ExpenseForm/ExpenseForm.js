import React, { useState } from 'react';
import ExpenseError from '../ExpenseError/ExpenseError';

import './ExpenseForm.scss';

function ExpenseForm({ onSaveExpenseData, onCancel }) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [error, setError] = useState(false)

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const isInputsCorrect = checkInputs();

        if (!isInputsCorrect) {
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        onSaveExpenseData(expenseData);
        clearForm();
        onCancel();
    };

    const checkInputs = () => {
        if (enteredTitle.trim().length === 0) {
            setError(true)
            return false;
        }

        if (enteredAmount.length === 0) {
            setError(true)
            return false;
        }

        if (enteredDate.length === 0) {
            setError(true)
            return false;
        }

        return true;
    }

    const clearForm = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const cancelFormHandler = () => {
        onCancel();
    }

    return (
        <>
            {error && <ExpenseError errorMessage={'Error! Fields can\'t be empty'} />}
            <form onSubmit={submitHandler} >
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number"
                            value={enteredAmount}
                            min="0.01"
                            step="0.01"
                            onChange={amountChangeHandler}
                        />
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date"
                            value={enteredDate}
                            min="2019-01-01"
                            max="2023-12-31"
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="button" onClick={cancelFormHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </>
    );
};

export default ExpenseForm
