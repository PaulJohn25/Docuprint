import { SignupForm } from "@/components/signup-form";

const SignupPage = () => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-slate-100">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </main>
  );
};

export default SignupPage;
