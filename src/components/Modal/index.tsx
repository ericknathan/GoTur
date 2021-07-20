import { Modal } from './styles';
import { Button } from '../Button';
import { ReactNode } from 'react';

type ModalProps = {
    action: () => void;
    toggleAction: () => void;
    title: string;
    children: ReactNode;
    acceptText: string;
    type: 'delete' | 'close'; 
  }

export function StyledModal(props: ModalProps) {
    return (
        <Modal>
            <h2>{props.title}</h2>
          <span>{props.children}</span>
          <div className="buttons">
              <Button id="cancel" onClick={props.toggleAction}>Cancelar</Button>
              <Button id="confirm" onClick={props.action}>{props.acceptText}</Button>
          </div>
        </Modal>
    );
}