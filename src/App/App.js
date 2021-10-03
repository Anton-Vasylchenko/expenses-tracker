import React, { useState } from "react";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import './App.css';

const DUMB_DATA = [
  { id: 'e1', title: 'Car Insurance', amount: 150, date: new Date(2019, 2, 28) },
  { id: 'e2', title: 'New game', amount: 50, date: new Date(2019, 5, 18) },
  { id: 'e3', title: 'New phone', amount: 300, date: new Date(2019, 3, 8) },
  { id: 'e4', title: 'TV', amount: 700, date: new Date(2020, 3, 12) },
  { id: 'e5', title: 'Computer', amount: 600, date: new Date(2020, 6, 4) },
  { id: 'e6', title: 'Headphones', amount: 205, date: new Date(2020, 6, 18) },
  { id: 'e7', title: 'Guitar', amount: 300, date: new Date(2021, 1, 3) },
  { id: 'e8', title: 'HDD', amount: 180, date: new Date(2021, 1, 6) },
  { id: 'e9', title: 'Monitor', amount: 194.30, date: new Date(2021, 1, 7) },
  { id: 'e10', title: 'Table', amount: 394.6, date: new Date(2021, 3, 6) },
  { id: 'e11', title: 'RAM', amount: 94.4, date: new Date(2021, 3, 18) }
];

function App() {
  const [expenses, setExpenses] = useState(DUMB_DATA)

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [
        ...prevState,
        newExpense
      ]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
