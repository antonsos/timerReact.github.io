import React from 'react';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='container'>
        <h1 className='header__title'>{props.title}</h1>
        <h2 className='header__subtitle'>{props.subtitle}</h2>
      </div>
    </header>
  );
}

export default Header;