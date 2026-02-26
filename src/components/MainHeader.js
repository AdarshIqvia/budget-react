import React from 'react'
import {  Header } from 'semantic-ui-react';
function MainHeader({title,type='h1'}) {
  return (
    <div><Header as={type} textAlign='center'>{title}</Header></div>
  )
}

export default MainHeader