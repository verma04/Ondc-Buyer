import Image from "next/image";
import styles from "./page.module.css";
import PageLayout from "@/layout/PageLayout";
import DashBoard from "@/dashboard";
import MainPageLayout from "@/layout/MainPageLayout";

export default function Home() {
  return (
    <MainPageLayout>
      <DashBoard />
    </MainPageLayout>
  );
}
