import React, { FC } from 'react';
import { RollerButtonWrapper } from './rollerButton.styled';

interface RollerButtonProps {
   rollJackpot: () => void;
 }

const RollerButton: FC<RollerButtonProps> = ({ rollJackpot }) => {
   function onRollerButtonClick() {
      rollJackpot();
   };

   return (
      <RollerButtonWrapper data-testid="roller" >
         <button onClick={onRollerButtonClick}> Roll Jackpot</button>
      </RollerButtonWrapper>
   );
};

export default RollerButton;
