// Parent of Card.js
import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardArray = robots.map((user, idx) => {
    return ( <Card key={robots[idx].id} id={robots[idx].id} name={robots[idx].name} username={robots[idx].username} email={robots[idx].email} /> )
  })
  return (
    <div className="container"> {/**  w-20 here makes whole list so small can't see it! **/}
      {cardArray}
    </div>
  )
};

export default CardList;