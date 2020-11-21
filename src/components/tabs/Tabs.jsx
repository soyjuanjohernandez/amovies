import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './tabs.scss';
import TabItem from '../tabItem/TabItem';

const Tabs = (props) => {
  const {
    allOnClick,
    newOnClick,
    popularOnClick,
    trendsOnClick,
    favoritesOnClick,
    recommendationsOnClick,
    id,
  } = props;
  const scrollMoveStatic = () => {};
  return (
    <div className='tabs__container' id='tabsContainer'>
      <span id='id1' />
      <span id='id2' />
      <span id='id3' />
      <span id='id4' />
      <span id='id5' />
      <span id='id6' />

      <div className='tabs' id={id}>
        <NavHashLink activeClassName='tab-active' scroll={scrollMoveStatic} to='#id1'>
          <TabItem
            id='item1'
            name='All'
            title='All'
            onClick={allOnClick}
          />
        </NavHashLink>

        <NavHashLink activeClassName='tab-active' scroll={scrollMoveStatic} to='#id2'>
          <TabItem
            id='item2'
            name='New Relases'
            title='New Relases'
            onClick={newOnClick}
          />
        </NavHashLink>

        <NavHashLink activeClassName='tab-active' scroll={scrollMoveStatic} to='#id3'>
          <TabItem
            id='item3'
            name='Most popular'
            title='Most popular'
            onClick={popularOnClick}
          />
        </NavHashLink>

        <NavHashLink activeClassName='tab-active' scroll={scrollMoveStatic} to='#id4'>
          <TabItem
            id='item4'
            name='Trends'
            title='Trends'
            onClick={trendsOnClick}
          />
        </NavHashLink>

        <NavHashLink activeClassName='tab-active' scroll={scrollMoveStatic} to='#id5'>
          <TabItem
            id='item5'
            name='My Favorites'
            title='My Favorites'
            onClick={favoritesOnClick}
          />
        </NavHashLink>

        <NavHashLink activeClassName='tab-active' scroll={scrollMoveStatic} to='#id6'>
          <TabItem
            id='item6'
            name='Recommendations'
            title='Recommendations'
            onClick={recommendationsOnClick}
          />
        </NavHashLink>
      </div>
    </div>

  );
};

export default Tabs;
