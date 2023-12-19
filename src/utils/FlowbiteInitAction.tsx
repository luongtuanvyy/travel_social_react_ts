import { initFlowbite } from 'flowbite';
import { ReactNode } from 'react';

interface InitFlowbiteProviderProps {
  children: ReactNode;
}

export const InitFlowbiteProvider = ({
  children,
}: InitFlowbiteProviderProps) => {
  initFlowbite();
  return <>{children}</>;
};
