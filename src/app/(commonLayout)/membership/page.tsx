import Membership from "@/components/modules/Membership/Membership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership - DreMarr",
  description: "Join DreMarr and upgrade your experience. View our premium membership tiers.",
};

export default function MembershipPage() {
  return <Membership />;
}
