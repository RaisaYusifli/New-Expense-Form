import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {//props=array di burda filter edirik
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} //two-way-binding
          onFilterChange={FilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList expenses={filteredExpense} />

        {/* {filteredExpense.length === 0 && <p>No Expenses Found </p>}
        {filteredExpense.length > 0  &&
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        } */}
      </Card>
    </div>
  );
};

export default Expenses;
