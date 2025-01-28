import { LoginForm } from "@/components/login-form";

const LoginPage = () => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-slate-100">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
