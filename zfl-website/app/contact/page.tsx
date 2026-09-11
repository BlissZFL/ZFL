import ContactSection from "./contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - ZeroFrictionLab",
  description: "Deploy your first agent today. Let's build your neural future together.",
};

export default function ContactPage() {
  return <ContactSection />;
}
