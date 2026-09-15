import ContactSection from "./contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - ZeroFrictionLab | Web & App Design + Development",
  description:
    "Let's build something worth using. Have a website, app, product or automation in mind? Tell us what you are building.",
};

export default function ContactPage() {
  return <ContactSection />;
}
