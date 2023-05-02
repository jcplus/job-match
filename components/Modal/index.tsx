import React, {useEffect, useRef} from 'react';
import modalStyles from '../../styles/modal.module.css';

interface Action {
	label: string;
	className?: string;
	handle: () => void;
}

interface ModalProps {
	isVisible: boolean;
	setIsVisible: (visible: boolean) => void;
	title: string;
	actions?: Action[];
	children: React.ReactNode;
	clickElsewhereToClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
										 isVisible,
										 setIsVisible,
										 title,
										 actions,
										 clickElsewhereToClose = true,
										 children,
									 }) => {
	const modalWrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				clickElsewhereToClose &&
				modalWrapperRef.current &&
				!modalWrapperRef.current.contains(event.target as Node)
			) {
				setIsVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setIsVisible, clickElsewhereToClose]);

	if (!isVisible) {
		return null;
	}

	return (
		<div className={modalStyles.modal}>
			<div ref={modalWrapperRef} className={`u-flex u-flex-column ${modalStyles.modalWrapper}`}>
				<div className={modalStyles.modalHead}>
					<span className="u-text-bold">{title}</span>
				</div>
				<div className={modalStyles.modalContent}>{children}</div>
				<div className={modalStyles.modalFoot}>
					<div className={`u-flex u-align-center u-justify-between u-full-width`}>
						<a
							className={`u-flex u-align-center u-justify-center u-cursor-link ${modalStyles.modalAction} ${modalStyles._cancel}`}
							onClick={() => setIsVisible(false)}
						>Cancel</a>
						<div className={`u-flex u-align-center u-justify-end ${modalStyles.modalActionRight}`}>
							{actions &&
								actions.map((action, index) => (
									<a
										key={index}
										className={`u-flex u-align-center u-justify-center u-cursor-link ${modalStyles.modalAction} ${action.className}`}
										onClick={action.handle}
									>{action.label}</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;