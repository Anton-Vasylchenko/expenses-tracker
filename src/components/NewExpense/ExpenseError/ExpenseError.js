import React from 'react'
import Cart from '../../UI/Card/Card'

import './ExpenseError.scss'

function ExpenseError({ errorMessage }) {
    return (
        <Cart className="expense-error">
            {errorMessage}
        </Cart>
    )
}

export default ExpenseError
