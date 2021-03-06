import React, { Component } from 'react';
import UserMenu from './UserMenu'
import HeaderSubNav from './HeaderSubNav'
import Md from 'react-md';

const nav = <nav>
              <div className='sections'>
                <Md.Button href='http://google.com' flat label="Bots" />
              </div>
              <UserMenu />
            </nav>

const IconActive = React.createClass({
 render() {
   return (
      <svg version="1.1" id="Logos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlSpace="preserve" width="60px" height="60px">
        <path className="st0" d="M60,30c0,16.6-13.4,30-30,30S0,46.6,0,30S13.4,0,30,0S60,13.4,60,30z M30,1C14,1,1,14,1,30s13,29,29,29
          s29-13,29-29S46,1,30,1z"/>
        <g>
          <path className="st1" d="M25.8,42.5l-3.9-11.3c-0.3-0.8-0.3-1.7,0-2.5L26.3,16h-8.5l-4.4,12.7c-0.3,0.8-0.3,1.7,0,2.5l3.9,11.3
            c0.3,0.9,1.1,1.5,2,1.5h8.5C26.9,44,26.1,43.4,25.8,42.5z"/>
          <path className="st2" d="M32.2,16c-0.9,0-1.7,0.6-2,1.5L25.8,30l-4.3,12.5c-0.3,0.9-1.1,1.5-2,1.5h8.5c0.9,0,1.7-0.6,2-1.5L34.2,30
            l4.3-12.5c0.3-0.9,1.1-1.5,2-1.5H32.2z"/>
          <g className="st3">
            <path d="M38.6,17.5c0.3-0.9,1.1-1.5,2-1.5h-8.5c-0.9,0-1.7,0.6-2,1.5L25.8,30l-2.2,6.5l13-13L38.6,17.5z"/>
          </g>
          <path className="st1" d="M34.2,17.5l3.9,11.3c0.3,0.8,0.3,1.7,0,2.5L33.7,44h8.5l4.4-12.7c0.3-0.8,0.3-1.7,0-2.5l-3.9-11.3
            c-0.3-0.9-1.1-1.5-2-1.5h-8.5C33.1,16,33.9,16.6,34.2,17.5z"/>
          <g className="st4">
            <path d="M21.9,28.7L26.3,16h-8.5l-4.4,12.7c-0.1,0.4-0.2,0.8-0.2,1.3h8.5C21.7,29.6,21.8,29.1,21.9,28.7z"/>
          </g>
          <g className="st4">
            <path d="M38.1,31.3L33.7,44h8.5l4.4-12.7c0.1-0.4,0.2-0.8,0.2-1.3h-8.5C38.3,30.4,38.2,30.9,38.1,31.3z"/>
          </g>
        </g>
      </svg>
   )
 }
});

const subNav =  <div className='sub-nav'>
                  <IconActive />
                  <h1>WPF chat bot</h1>
                </div>



export default class Header extends Component {
  render() {

    return (
        <Md.Toolbar
          className='mainToolbar'
          colored
          nav={nav}
          title={subNav}
          children={<HeaderSubNav />}
          prominent
        />
    );
  }
}

