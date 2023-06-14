import React from 'react';
import { CounterDialog } from './components/dialogs/CreateProductDialog/CreateProductDialog';
import { dialogs } from './constants/dialogs';

export const renderDialog = (dialogId) => {
  switch (dialogId) {
    case dialogs.CounterDialog:
      return <CounterDialog />;
    default:
      return null;
  }
};
