import React from 'react';

interface LoadingCircleProps {
	duration?: number;
	size?: number;
	strokeColor?: string;
	message?: string;
}

const LoadingCircle: React.FC<LoadingCircleProps> = ({strokeColor = '#0077ff', size = 20, duration = 2, message}) => {
	const radius = size / 2 - 3;
	const circumference = 2 * Math.PI * radius;

	return (
		<div className="u-flex u-flex-column u-align-center u-justify-center u-full-height u-full-width">
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				<circle
					fill="none"
					stroke="#ffffff"
					strokeWidth="3"
					cx={size / 2}
					cy={size / 2}
					r={radius}
				/>
				<circle
					fill="none"
					stroke={strokeColor}
					strokeWidth="3"
					strokeLinecap="round"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeDasharray={`${circumference} ${circumference}`}
				>
					<animate attributeName="stroke-dasharray" from={`0 ${circumference}`}
							 to={`${circumference} ${circumference}`} dur={`${duration}s`} repeatCount="indefinite"/>
					<animateTransform attributeName="transform" type="rotate" from={`0 ${size / 2} ${size / 2}`}
									  to={`360 ${size / 2} ${size / 2}`} dur={`${duration}s`} repeatCount="indefinite"/>
				</circle>
			</svg>
			{message && (
				<div className="u-text-center" style={{marginTop: 10}}>
					<span>{message}</span>
				</div>
			)}
		</div>
	);
};

export default LoadingCircle;