import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Revenue from "./components/revenue.js";
import Home from "./components/home.js";
import Navbar from "./components/navbar.js";
import CreateCategory from "./components/create-category.js";
import Expense from "./components/expense.js";
import CreateExpense from "./components/create-expense.js";

import Test from "./components/test-page.js";

function App() {
  return (
  <Router>
  <Navbar/>  
  <br/>
   <Routes>
      <Route path='/' element={<Home/>} exact/> 
      <Route path='/revenue' element={<Revenue/>} exact/> 
      <Route path='/expense' element={<Expense/>} exact/> 
      <Route path='/expenses/add' element={<CreateExpense/>} exact/>
      <Route path='/category/add' element={<CreateCategory/>} exact/>
      <Route path='/test' element={<Test />} exact/> 
    </Routes> 
  </Router>
  );
}


export default App;
