import React from 'react';
import Aptitude from './Aptitude';
import Footer from './Footer';
import Header from './Header';
import Professionelle from './Professionelle';
import Profil from './Profil';


const App = () => {
  return (
    <div>
      <Header />
      <Profil />
      <Aptitude />
      <Professionelle />
      <Footer />
    </div>
  );
};

export default App;
