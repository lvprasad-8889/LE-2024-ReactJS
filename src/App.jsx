import "./App.css";

// /counter
// /login
// /todo-list, todoList
import Counter from "./components/Counter/Counter";
import Login from "./components/Login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import TodoList from "./components/TodoList/TodoList";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="container mt-4">
        <Routes>
          {/* default path */}
          <Route path="" Component={Home}></Route>
          <Route path="counter/:value" Component={Counter}></Route>
          <Route path="todo-list" Component={TodoList}></Route>
          <Route path="login" Component={Login}></Route>
          <Route path="cart" Component={Cart}></Route>
          <Route path="*" Component={PageNotFound}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

// validUser: false --> logged --> validUser: true
