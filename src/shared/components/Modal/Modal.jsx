import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ onClose, children }) => {
	useEffect(() => {
		document.addEventListener("keydown", handleClose);
		return () => document.removeEventListener("keydown", handleClose);
	}, []);

	const handleClose = (e) => {
		if (e.code === "Escape") {
			return onClose();
		}
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return createPortal((
		<div onClick={ handleClose } className={ styles.backdrop }>
			<div className={ styles.modal } id="modal">
				{ children }
			</div>
		</div>
	), modalRoot);
};

export default Modal;