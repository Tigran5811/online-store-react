import React, { useState } from 'react';
import { Provider } from './index';

export const DialogProvider = ({ children }) => {
  const [dialogId, setDialogId] = useState(null);

  const openDialog = (dialogId) => {
    setDialogId(dialogId);
  };

  const closeDialog = () => {
    setDialogId(null);
  };

  return (
    <Provider value={{
      dialogId,
      openDialog,
      closeDialog,
    }}
    >
      {children}
    </Provider>
  );
};
