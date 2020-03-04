import { createContext } from 'react';

const Meta = createContext({
  activeEdition: null,
  editions: null,
  showPreviousPartners: true
});

export default Meta;
