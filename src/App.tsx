import React from 'react';
import SuperPlayground from "./components/SuperPlayground/SuperPlayground";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NewPasswordPage from "./components/NewPasswordPage/NewPasswordPage";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <div className="App">
            <ErrorPage/>
            <Login/>
            <SignUp/>
            <NewPasswordPage/>
            <PasswordRecovery/>
            <Profile/>
            <hr/>
            <SuperPlayground/>
        </div>
    );
}

export default App;
