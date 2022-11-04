import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/Navbar';
import Leads from './components/Leads/Leads';
import Contacts from './components/Contacts/Contacts';
import Accounts from './components/Accounts/Accounts';
import Deals from './components/Deals/Deals';
import CreateNewItem from './components/CreateNewItem/CreateNewItem';
import CreatNewLead from './components/CreatNewLead/CreatNewLead';
import CreateNewAccount from './components/CreateNewAccount/CreateNewAccount';
import CreateNewContact from './components/CreateNewContact/CreateNewContact';
import CreateNewDeal from './components/CreateNewDeal/CreateNewDeal';
import SingleAccountDetails from './components/SingleAccountDetails/SingleAccountDetails';
import SingleLeadDetails from './components/SingleLeadDetails/SingleLeadDetails';
import SingleContactDetails from './components/SingleContactDetails/SingleContactDetails';
import SingleDealDetails from './components/SingleDealDetails/SingleDealDetails';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Settings from './components/Settings/Settings';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ForgotPassword from './components/Authentication/ForgotPassword';

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={<RequireAuth>
            <Home />
          </RequireAuth>} />
          <Route path="/home" element={<RequireAuth>
            <Home />
          </RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leads" element={<RequireAuth>
            <Leads />
          </RequireAuth>} />
          <Route path="/contacts" element={<RequireAuth>
            <Contacts />
          </RequireAuth>} />
          <Route path="/accounts" element={<RequireAuth>
            <Accounts />
          </RequireAuth>} />
          <Route path="/deals" element={<RequireAuth>
            <Deals />
          </RequireAuth>} />
          <Route path="/settings" element={<RequireAuth>
            <Settings />
          </RequireAuth>} />
          <Route path="/create/lead" element={<RequireAuth>
            <CreatNewLead />
          </RequireAuth>} />
          <Route path="/create/contact" element={<RequireAuth>
            <CreateNewContact />
          </RequireAuth>} />
          <Route path="/create/account" element={<RequireAuth>
            <CreateNewAccount />
          </RequireAuth>} />
          <Route path="/create/deal" element={<RequireAuth>
            <CreateNewDeal />
          </RequireAuth>} />
          <Route path='/account/:id' element={<RequireAuth>
            <SingleAccountDetails />
          </RequireAuth>} />
          <Route path='/lead/:id' element={<RequireAuth>
            <SingleLeadDetails />
          </RequireAuth>} />
          <Route path='/contact/:id' element={<RequireAuth>
            <SingleContactDetails />
          </RequireAuth>} />
          <Route path='/deal/:id' element={<RequireAuth>
            <SingleDealDetails />
          </RequireAuth>} />

          <Route path='/forgotPassword' element={<ForgotPassword />} />

        </Routes>
      </div>
    </DndProvider>
  );
}

export default App;
