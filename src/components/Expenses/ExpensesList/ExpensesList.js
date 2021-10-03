import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.scss';

function ExpensesList({ items }) {

    if (items.length === 0) {
        return <p className="expenses-list__fallback ">No expenses found</p>;
    }

    return <ul className="expenses-list">
        {
            items.map(elem => {
                return <ExpenseItem key={elem.id} item={elem} />
            })
        }
    </ul>
}

export default ExpensesList
