import { initFlowbite } from 'flowbite';
import React, { ReactNode } from 'react';

interface InitFlowbiteProviderProps {
  children: ReactNode;
}

export const InitFlowbiteProvider = ({
  children,
}: InitFlowbiteProviderProps) => {
  initFlowbite();
  return <>{children}</>;
};
