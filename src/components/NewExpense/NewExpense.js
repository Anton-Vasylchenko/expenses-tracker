import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';

import './NewExpense.scss';

function NewExpense({ onAddExpense }) {
    const [isVisible, setIsVisible] = useState(false)

    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onAddExpense(expenseData)
    }

    const showFormHandler = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="new-expense">
            {!isVisible && <button onClick={showFormHandler}> New Expense </button>}
            {isVisible && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={showFormHandler} />}
        </div>
    )
}

export default NewExpense
