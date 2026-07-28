import { SignInButton } from "@clerk/react";

function LoginRequired() {
  return (
    <section className="login-required">
      <h2>Login Required</h2>
      <p>You must be logged in to create a new entry.</p>

      <SignInButton mode="modal">
        <button type="button">Log In</button>
      </SignInButton>
    </section>
  );
}

export default LoginRequired;