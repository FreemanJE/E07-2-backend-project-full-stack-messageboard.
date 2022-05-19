export default function Register() {
    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First name
                    <input type="text" autoComplete="firstname" name="firstname" required/>
                </label>
                <label>
                    Last name
                    <input type="text" autoComplete="lastname" name="lastname" required/>
                </label>
                <label>
                    E-mail
                    <input type="email" autoComplete="email" name="email" required/>
                </label>
                <label>
                    Password
                    <input type="password" autoComplete="new-password" name="password" required/>
                </label>
                <button type="submit">Register</button>
            </form>
        </>
    );
}
