// Child of Cardlist.js
import React from 'react'; // Required for JSX i.e. <div> below is

// Function Way, NOT extend component way
// const Card = (props) => {
  // const { id, name, username, email } = props;
const Card = ({ id, name, username, email }) => {  
  return ( // return ONE component i.e. div
    <div className='tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5 fl w-25'> 
       {/* <img src={`https://robohash.org/${id}?size=350x350`} alt='RoboFoto'/> */}
       <img src={`https://robohash.org/${id}?size=200x200`} alt='RoboFoto'/>
       <div>
         <h2>{name}</h2>
         <h4>Username: {username}</h4>
         <h6>e-mail: {email}</h6>
       </div>
    </div>
  )
}

export default Card;