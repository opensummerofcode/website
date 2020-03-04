import { createContext } from 'react';

const Meta = createContext({
  activeEdition: null,
  editions: null,
  showPreviousPartners: true,
  previousEdition: null
});

export default Meta;
