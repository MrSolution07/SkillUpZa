//this page is for us to keep the username so that it can be accessible anywhere on the project 

// but i.m still seeing flames, i need you with the paths and stuff...
import React from 'react';
import Login from './Login';
import UserProfile from './src\Pages\Dashboard\components\Sidebar.tsx'; // here is your error mike 
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      <Login />
      <UserProfile />
    </UserProvider>
  );
};

export default App;
