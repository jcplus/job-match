import React, { useState } from 'react';
import styles from '../../styles/loginOrSignUp.module.css';

interface LoginOrSignUpProps {
	isVisible: boolean;
	setIsVisible: (visible: boolean) => void;
}

const LoginOrSignUp: React.FC<LoginOrSignUpProps> = ({ isVisible, setIsVisible }) => {
	const [isLogin, setIsLogin] = useState(true);

	const switchForm = () => {
		setIsLogin(!isLogin);
	};

	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				{isLogin ? (
					<>
						<h2>Login</h2>
						<form>
							<label htmlFor="email">Email:</label>
							<input type="email" name="email" required />
							<br />
							<label htmlFor="password">Password:</label>
							<input type="password" name="password" required />
							<br />
							<button type="submit">Login</button>
						</form>
						<p>
							Don't have an account?{' '}
							<button onClick={switchForm}>Sign up</button>
						</p>
					</>
				) : (
					<>
						<h2>Sign Up</h2>
						<form>
							<label htmlFor="username">Username:</label>
							<input type="text" name="username" required />
							<br />
							<label htmlFor="email">Email:</label>
							<input type="email" name="email" required />
							<br />
							<label htmlFor="password">Password:</label>
							<input type="password" name="password" required />
							<br />
							<button type="submit">Sign Up</button>
						</form>
						<p>
							Already have an account?{' '}
							<button onClick={switchForm}>Login</button>
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default LoginOrSignUp;
