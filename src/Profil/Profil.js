import React from 'react';

const Profil = (props) => {
    return (
    <div>
      <img src={props.imgSrc} alt="profil pic"/>
      <div>FullName : {props.fullName}</div>
      <div>Bio : {props.bio}</div>
      <div>Profession : {props.profession}</div>
   </div>
    );
}

export default Profil;
