exports.auth = (req, res, next) => {
	const { authorization } = req.headers;

	if (authorization?.startsWith('Basic ')) {
		const encodedCreds = authorization.split(' ')[1];
		const [username, password] = atob(encodedCreds).split(":");

		if (username === process.env.USERNAME && password === process.env.PASSWORD) {
			return next();
		}
	}
	/**This header shows the sign in browser popup */
	res.set({ 'www-Authenticate': 'Basic' });
	return res.status(401).json({ message: 'Unauthorized' });
}