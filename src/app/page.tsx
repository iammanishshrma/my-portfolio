import Header from "@/shared/components/header/header";
import HomeSection from "@/shared/components/home/home";
import AboutSection from "@/shared/components/about/about";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <Header />
            <HomeSection />
            <AboutSection />
        </>
    );
}
