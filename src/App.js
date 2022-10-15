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
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/create/lead" element={<CreatNewLead />} />
          <Route path="/create/contact" element={<CreateNewContact />} />
          <Route path="/create/account" element={<CreateNewAccount />} />
          <Route path="/create/deal" element={<CreateNewDeal />} />
          <Route path='/account/:id' element={<SingleAccountDetails />} />
          <Route path='/lead/:id' element={<SingleLeadDetails />} />

        </Routes>
      </div>
    </DndProvider>
  );
}

export default App;
