import Support from "@/components/modules/Support/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - DreMarr",
  description: "Get help and support for your DreMarr account",
};

export default function SupportPage() {
  return <Support />;
}
