import {Head, ProfileImage, Title} from './style';
import React from 'react';
import Profile from '../../assets/profilePicture.jpg';
const Header = () => (
  <Head>
    <Title>CryptoTracker Pro</Title>
    <ProfileImage source={Profile} />
  </Head>
);
export default Header;
