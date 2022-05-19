export default function Login() {
    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    E-mail
                    <input type="email" autoComplete="email" name="email" required/>
                </label>
                <label>
                    Password
                    <input type="password" autoComplete="current-password" name="password" required/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
