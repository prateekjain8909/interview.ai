import React from 'react';
import './Home.css';
import Cards from '../components/Cards/Cards'
import Banner from '../components/banner/Banner'
import CommunityRegistration from '../components/community-registration/CommunityRegistration';

function Home() {
  return (
    <div>
    <div className="home">
      <Cards/>
    </div>
    <div>
      <Banner/>
      <CommunityRegistration/>
    </div>
    </div>
    
  );
}

export default Home;
