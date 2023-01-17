import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";


import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2021");

  const filterChangeHandler = (filterDate) => {
    setFilterDate(filterDate);
    // console.log(filterDate);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterDate;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterDate}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
