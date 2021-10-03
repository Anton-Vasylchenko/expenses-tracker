import React, { useState } from 'react';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import Card from '../UI/Card/Card';

import './Expenses.scss';

function Expenses({ items }) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (changedYear) => {
        setFilteredYear(changedYear);
    }

    const filteredExpenses = items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter currentYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses
