import React , {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing,setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  
  


  const handleEditing = () => {

    setIsEditing(true);
  }


  const stopEditing = ()=>{
    setIsEditing(false);
  }



  return (
    <div className='new-expense'>

     {!isEditing &&   <button onClick={handleEditing}>Add new Expense</button>}

     {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;
