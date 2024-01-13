import React from 'react';
import {TouchableOpacity, Image, useState} from 'react-native';

const Button = ({state1, state2, processNum}) => {
  const [isActive, setIsActived] = useState(false);

  const handleButton = () => {
    setIsActived(!isActive);
  };

  const handleButton2 = () => {
    setIsActived(!isActive);
  };

  const process = {
    1: handleButton,
    2: handleButton2,
  };

  return (
    <TouchableOpacity onPress={process[processNum]}>
      <Image
        source={!isActive ? state1 : state2} // State1 = OFF, State2 = ON
        style={{width: 50, height: 50}}
      />
    </TouchableOpacity>
  );
};

export default Button;
