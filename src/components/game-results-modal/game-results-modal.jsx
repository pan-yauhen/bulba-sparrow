import { Button, Modal } from 'antd';
import React from 'react';

export const GameResultsModal = ({ isOpen, handleRestart, result }) => (
  <Modal visible={isOpen} footer={null} header={null}>
    <div className="d-flex flex-column align-items-center justify-content-between result-modal p-4">
      <div>Ваш результат: {`${result} сек.`}</div>
      <Button onClick={handleRestart}>
        Попробовать снова
      </Button>
    </div>
  </Modal>
);
