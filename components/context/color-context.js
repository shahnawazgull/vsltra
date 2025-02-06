import { createContext } from 'react';

export const ColorContext = createContext({
  backgroundColor: '#000000',
  foregroundColor: '#ffffff',  // Corrected the typo here
  fontSz: '24px',
  boxSize: '100%',
  height: 96,
  totalSubscriptions: 0,
});
