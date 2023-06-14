import Modal from 'react-modal';
import React from 'react';
import { customStyles } from './constants';
import { Button } from '../Button/Button';
import { withDialog } from '../../../hocs/withDialog';

Modal.setAppElement('#root');

const Dialog = ({
  isOpen, closeDialog, label, children,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeDialog}
    style={customStyles}
    contentLabel={label}
  >
    <Button
      onClick={closeDialog}
      type="button"
      text="Close Dialog"
    />
    {children}
  </Modal>
);

export default withDialog(Dialog);
