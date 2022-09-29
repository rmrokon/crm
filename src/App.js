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

const links = [
  'Home', 'Leads', 'Contacts', 'Accounts', 'Deals', 'Calls', 'Meetings'
]

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/create/:category" element={<CreatNewLead />} />

      </Routes>
    </div>
  );
}

export default App;
