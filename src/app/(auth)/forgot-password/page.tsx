import ForgotPassword from "@/components/modules/Auth/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - DreMarr",
  description: "Reset your DreMarr account password",
};

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
