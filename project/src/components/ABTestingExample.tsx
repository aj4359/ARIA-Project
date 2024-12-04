import React from 'react';
import { useABTesting } from '../hooks/useABTesting';

interface ABTestingExampleProps {
  testId: string;
  variantA: React.ReactNode;
  variantB: React.ReactNode;
}

const ABTestingExample: React.FC<ABTestingExampleProps> = ({
  testId,
  variantA,
  variantB
}) => {
  const { variant, trackConversion } = useABTesting(testId);

  return (
    <div onClick={trackConversion}>
      {variant === 'A' ? variantA : variantB}
    </div>
  );
};