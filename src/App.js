/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import UserDetails from "./pages/UserDetails";
import UsersList from "./pages/UsersList";
import InactiveAccountperiod from "./pages/InactiveAccountperiod";
import OrgSecCont from "./pages/ OrgSecControls ";
import SecurityPolices from "./pages/SecurityPolices";
import OldProfile from "./pages/OldProfile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NewPassword from "./pages/NewPassword";
import passOrpasskey from "./pages/passOrPasskey";
import MagicLink from "./pages/MagicLink";
import MfaLogin from "./pages/MfaLogin";
import MfaCreate from "./pages/MfaCreate";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/custom.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/magic-link" exact component={MagicLink} />
        <Route path="/mfa-login" exact component={MfaLogin} />
        <Route path="/mfa-create" exact component={MfaCreate} />
        <Route path="/new-pass" exact component={NewPassword} />
        <Route path="/pass-or-passkey" exact component={passOrpasskey} />
        
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/user-details" component={UserDetails} />
          <Route exact path="/old-profile" component={OldProfile} />
          <Route exact path="/users-list" component={UsersList} />
          <Route exact path="/org-sec" component={OrgSecCont} />
          <Route exact path="/sec-pol" component={SecurityPolices} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
