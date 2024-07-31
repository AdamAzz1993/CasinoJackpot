import React, { FC } from 'react';
import { StatsWrapper } from './stats.styled';

interface StatsProps {
   credit: number
}

const Stats: FC<StatsProps> = ({credit}) => {
   return (
 <StatsWrapper data-testid="stats">
    Credit: {credit}
 </StatsWrapper>
)};

export default Stats;
