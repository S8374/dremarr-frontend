import VerifyOTP from "@/components/modules/Auth/VerifyOTP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify OTP - DreMarr",
  description: "Verify your one-time password",
};

export default function VerifyOTPPage() {
  return <VerifyOTP />;
}
