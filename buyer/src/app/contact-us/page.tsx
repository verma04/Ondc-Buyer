import Image from "next/image";
import styles from "./page.module.css";
import PageLayout from "@/layout/PageLayout";
import DashBoard from "@/dashboard";
import MainPageLayout from "@/layout/MainPageLayout";
import Contact from "@/contact/Contact";

function ContactUs() {
  return (
    <MainPageLayout>
      <Contact />
    </MainPageLayout>
  );
}
export default ContactUs;
