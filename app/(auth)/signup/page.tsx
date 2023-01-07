import AuthForm, { SIGNUP } from "../../../components/AuthForm/AuthForm";
import Header from "../../../components/Header";

export default function SignUp() {
  return (
    <>
      <Header />
      <main className="main flex justify-center">
        <section className="w-full md:w-1/2 max-w-md">
          <AuthForm mode={SIGNUP} />
        </section>
      </main>
    </>
  );
}
