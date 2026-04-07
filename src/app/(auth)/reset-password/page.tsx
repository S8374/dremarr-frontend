import ResetPassword from "@/components/modules/Auth/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password - DreMarr",
  description: "Set a new password for your DreMarr account",
};

export default function ResetPasswordPage() {
  return <ResetPassword />;
}
