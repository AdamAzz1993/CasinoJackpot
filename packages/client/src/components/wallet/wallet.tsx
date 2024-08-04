import React, { FC } from 'react';
import { WalletWrapper } from './wallet.styled';

interface WalletProps {
   credit: number
}

const Wallet: FC<WalletProps> = ({credit}) => {
   return (
 <WalletWrapper data-testid="wallet">
    Credit: {credit}
 </WalletWrapper>
)};

export default Wallet;
