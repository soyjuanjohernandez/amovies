import React from 'react';
import './header.scss';

export default function Header(props) {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}
