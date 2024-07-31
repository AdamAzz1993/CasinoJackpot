import React, { FC } from 'react';
import { CashOutButtonWrapper } from './cashOutButton.styled';

interface CashOutButtonProps {
   cashOut: () => void;
}

const cashOutButton: FC<CashOutButtonProps> = ({ cashOut }) => {
      function onCashOutButtonClick() {
      cashOut();
   };

   return(
   <CashOutButtonWrapper data-testid="cashOutButton">
      <button onClick={onCashOutButtonClick}>Cash Out</button>
   </CashOutButtonWrapper>
)};

export default cashOutButton;