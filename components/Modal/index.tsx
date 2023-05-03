import React, {useEffect, useRef} from 'react';

interface Action {
	label: string;
	className?: string;
	handle: () => void;
}

interface ModalProps {
	isVisible: boolean;
	setIsVisible: (visible: boolean) => void;
	title: string;
	contentChildren: React.ReactNode;
	footerChildren: React.ReactNode;
	clickElsewhereToClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
										 isVisible,
										 setIsVisible,
										 title,
										 contentChildren,
										 footerChildren,
										 clickElsewhereToClose = true,
									 }) => {
	const modalContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				clickElsewhereToClose &&
				modalContainerRef.current &&
				!modalContainerRef.current.contains(event.target as Node)
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
		<div className="modal">
			<div className="modalWrapper">
				<div ref={modalContainerRef} className="u-flex u-flex-column modalContainer">
					<div className="modalHead">
						<span className="u-text-bold modalTitle">{title}</span>
					</div>
					<div className="modalContent">{contentChildren}</div>
					<div className="modalFoot">{footerChildren}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;