import Image from "next/image";
import styles from "./page.module.css";
import PageLayout from "@/layout/PageLayout";
import DashBoard from "@/dashboard";
import MainPageLayout from "@/layout/MainPageLayout";
import Contact from "@/contact/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Get in Touch | Connect with DeshBazaar | E-commerce Excellence",
  description:
    "Have  questions or  need assistance? Contact us today!  At DeshBazaar, we  are here to support you on your journey  to  e-commerce excellence and  services.",
};
function ContactUs() {
  return (
    <MainPageLayout>
      <Contact />
    </MainPageLayout>
  );
}
export default ContactUs;
