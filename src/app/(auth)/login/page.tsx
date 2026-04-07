import Login from "@/components/modules/Auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In - DreMarr",
  description: "Log into your DreMarr account",
};

export default function LoginPage() {
  return <Login />;
}