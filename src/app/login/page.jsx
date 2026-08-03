import LoginForm from "@/components/login/LoginForm";


export const metadata = {
  title: "Login | Smart Tutor",
  description: "Login to your Smart Tutor account.",
};

const LoginPage = async ({ searchParams }) => {
  const params = await searchParams;

  return <LoginForm redirectTo={params?.redirect || "/"} />;
};

export default LoginPage;
