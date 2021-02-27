import React from 'react';
import ReactDOM from 'react-dom';

/* --- Styled Components --- */
import { ModalContainer } from '../../styles/globalStyled';

const Modal = ({ setModal, seconds, destroySession, restartSession }) => {
	return ReactDOM.createPortal(
		<ModalContainer>
			<div className="modal">
				<span>
					Hey, Estas ahi? Si quieres continuar sesion solo da al boton
					de ok antes de que se termine la sesion {seconds}. De lo
					contrario seras redirigido al panel de login
				</span>
				<div>
					<button
						className="primary"
						onClick={() => {
							restartSession();
							setModal(false);
						}}
					>
						Confirmar
					</button>
					<button
						className="cancel"
						onClick={() => {
							destroySession();
						}}
					>
						Salir
					</button>
				</div>
			</div>
		</ModalContainer>,
		document.getElementById('modal')
	);
};

export default Modal;
