import React, { FC, useEffect, useState } from 'react';
import { BlockWrapper } from './block.styled';
import { eBlockType } from '@enums/eBlockType';

interface BlockProps {
  index: number;
  value: eBlockType | string;
}

const Block: FC<BlockProps> = ({ index, value }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [block, setBlock] = useState<eBlockType | string | null>(null);
  const delay = index * 1000 + 1000; // 1 second delay for each block
  useEffect(() => {
    setIsLoading(true);
    setBlock(eBlockType.Spinner);

    const timer = setTimeout(() => {
      setBlock(value);
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [index, value]);

  return (
    <BlockWrapper data-testid="block">
      {isLoading ? <div className="spinner">{eBlockType.Spinner} </div> : block}
    </BlockWrapper>
  );
};

export default Block;
