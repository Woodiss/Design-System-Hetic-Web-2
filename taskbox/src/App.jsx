import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./components/pages/Login";
import { Form } from "./components/form/Form";
import { Input } from "./components/input/Input";
import { LinkTag } from "./components/link/LinkTag";
import { Button } from "./components/button/Button";
import { Select } from "./components/select/Select";
import { Textarea } from "./components/textarea/Textarea";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Logo from "./components/assets/discord.svg?react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Form title="Login Form" subtitle="Please enter your credentials">
                <Input type="email" placeholder="Enter your email" label="Email" name="email" isRequired="true"/>
                <Input type="password" placeholder="Enter your password" label="Password" name="password" isRequired="true"/>
                <LinkTag content="Forgot password?" link="/forgot-password" />
                <Button type="submit" content="Login" />
              </Form>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Form title="Reset your password" subtitle="Please enter your details so we can send you a email to reset your password.">
                <Input type="email" placeholder="Enter your email" label="Email" name="email"isRequired="true" />
                <LinkTag content="Return to login" link="/" />
                <Button type="submit" content="Send" />
              </Form>
            }
          />
          <Route
            path="/contact"
            element={
              <Form title="Contact support" subtitle="If you have any problem you can contact support.">
                <Input type="firstname" placeholder="Enter your first name" label="First name" name="firstname" isRequired="true"/>
                <Input type="lastname" placeholder="Enter your last name" label="Last name" name="lastname" isRequired="true"/>
                <Input type="email" placeholder="Enter your email" label="Email" name="email" isRequired="true"/>
                <Select label="Select a topic" name="topic" options={["General", "Billing", "Technical", "Others"]} />
                <Textarea label="Message" placeholder="Enter your message" name="message" id="textarea" isRequired="true" />
                <LinkTag content="Return to login" link="/" />
                <Button type="submit" content="Send" />
              </Form>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
