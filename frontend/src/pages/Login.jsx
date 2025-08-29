import LoginForm from "../components/LoginForm";
import LoginText from "../components/LoginText";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300">
      <div className="flex flex-col md:flex-row  justify-center gap-60 w-full max-w-6xl px-4 py-8">
        <LoginText />
        <LoginForm />
        
      </div>
    </div>
  );
};

export default Login;
