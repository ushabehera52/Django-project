import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HelloWorld from './pages/hello';
import UserList from "./pages/users";
import CreateUserForm from "./pages/new_user";
import UserDetail from "./pages/users_id";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Assignment</h1>
        <Routes>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/new_user" element={<CreateUserForm />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
