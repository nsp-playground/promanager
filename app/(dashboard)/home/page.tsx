import AuthForm, {
  SIGNIN,
  SIGNUP,
} from "../../../components/AuthForm/AuthForm";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
      </main>
    </>
  );
}
