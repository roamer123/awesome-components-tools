import React from 'react';
import * as pageData from './data';

const { footer } = pageData;

export default function Footer() {
  const children = [
    <p key="Title" className="title" >{footer.title}</p>,
    <p key="SubTitle" className="subTitle">{footer.subTitle}</p>,
    <p key="Name" className="name">{footer.name}</p>,
    <p key="SubName" className="subName">{footer.subName}</p>,
  ];
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}
