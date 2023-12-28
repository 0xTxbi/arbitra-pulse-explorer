export interface RegisterFormValues {
	username: string;
	email: string;
	hashedPassword: string;
}

export interface LoginFormValues {
	usernameOrEmail: string;
	password: string;
}
