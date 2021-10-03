import React from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

import './ExpenseItem.scss'

function ExpenseItem({ item }) {
    const { date, amount, title } = item

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2> {title} </h2>
                    <div className="expense-item__price"> ${amount} </div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem
