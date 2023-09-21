import "./globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
    title: "Manish Sharma",
    description: "Manish Sharma's personal website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={openSans.className}>{children}</body>
        </html>
    );
}
