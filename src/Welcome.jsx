import React from 'react';

const Welcome = ({name}) => {
  return (
    <h1>Hola {name ? name : null}</h1>
  )
}

export default Welcome