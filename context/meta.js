import { createContext } from 'react';

const Meta = createContext({
  activeEdition: null,
  editions: null,
  showPreviousPartners: false,
  previousEdition: null
});

export default Meta;
