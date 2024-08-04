import React from 'react';
import { FC, useEffect, useState } from 'react';
import { CasinoService } from '@services/casinoService';
import Block from '@components/block/block';
import RollerButton from '@components/rollerButton/rollerButton';
import { useSelector } from 'react-redux';
import { eBlockType } from '@enums/eBlockType';
import CashOutButton from '@components/cashOutButton/cashOutButton';
import { DashboardContainer } from './dashboard.styled';
import Wallet from '@components/wallet/wallet';

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => {
   const casinoService = new CasinoService();
   const blocks = useSelector((state: 
      { currentBlocks: [], credit: number }) => state.currentBlocks);
   const credit = useSelector((state: 
      { currentBlocks: [], credit: number }) => state.credit);
   const [isActive, setIsActive] = useState(true);

   useEffect(() => {
      casinoService.startGame();
   }, []);

   const rollJackpot = async () => {
      setIsActive(false);
      try {
         await casinoService.rollJackpot();
         setTimeout(() => {
            setIsActive(true);
         }, 3000);
      } catch (error) {
         console.error('Error rolling jackpot:', error);
         setIsActive(true);
      }
   }

   return (
      <DashboardContainer data-testid="dashboard">
         <div className='blocks'>{blocks.map((value: eBlockType, index: number) => (
            <Block key={index} index={index} value={value} />
         ))}
         </div>
         <RollerButton rollJackpot={!!isActive && credit > 0  ? rollJackpot : () => { }} />
         <CashOutButton cashOut={!!isActive && credit > 0  ? casinoService.cashOut : () => { }} />
         <Wallet credit={credit} />
      </DashboardContainer>
   );
};

export default Dashboard;
