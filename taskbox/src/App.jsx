import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/pages/Login";
import { Form } from "./components/form/Form";
import { Input } from "./components/input/Input";
import { LinkTag } from "./components/link/LinkTag";
import { Button } from "./components/button/Button";
import { Select } from "./components/select/Select";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Button content={'testtt'} type={'submit'} isDisabled={false}/>} /> */}
          <Route
            path="/"
            element={
              <Form title="Login Form" subtitle="Please enter your credentials">
                <Input type="email" placeholder="Your Email" label="Email" name="email" />
                <Input type="password" placeholder="Your Password" label="Password" name="password" />
                {/* <NavLink>Test</NavLink> */}
                <LinkTag content="Forgot Password?" link="/forgot-password" />
                <Button type="submit" content="Login" />
              </Form>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Form title="Rest your password" subtitle="Please enter your details so we can send you a email to reset your password.">
                <Input type="email" placeholder="Your Email" label="Email" name="email" />
                <Button type="submit" content="Send" />
              </Form>
            }
          />
          {/* <Route path="/forgetPassword" element={<Button content={'testtt'} type={'submit'} isDisabled={false}/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
