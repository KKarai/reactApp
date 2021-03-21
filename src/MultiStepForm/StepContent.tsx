import React, { useMemo } from 'react';
import { CreateAccountForm } from './CreateAccount';
import { DetailForm } from './Detail';

export interface StepContentProps {
  step: number;
}
export const StepContent: React.FC<StepContentProps> = ({ step }) => {
  const steps = useMemo(() => [CreateAccountForm, DetailForm], []);
  const Component = steps[step];

  return <Component />;
};
