import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './uiComponents/Loader';
import Header from './components/Header';
import styled from 'styled-components'


const Layoutbox = styled.div`
  background-color: black;
  width: 100vw;
  color:white;
  padding:10px;
`

function Layout() {
    const navigation = useNavigation();
    console.log(navigation.state)
    
  return (
    
    <Layoutbox>
        {navigation.state === 'loading' && <Loader />}
        <Header />
        <Outlet />
    </Layoutbox>
  )
}

export default Layout