import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import ThemeProvider from "@/providers/theme-provider";
import {type Locale} from "@/i18n-config";
import DictionaryProvider from "@/context/DictionaryContext";

const inter = Inter({subsets: ["latin"]});

/*export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}));
}*/

export const metadata: Metadata = {
    title: "Pokedex",
    description: "Generated by create next app",
};

export default function RootLayout({children, params}: Readonly<{
    children: React.ReactNode,
    params: { lang: Locale }
}>) {
    return (
        <html lang={params.lang}>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <DictionaryProvider locale={params.lang}>
                {children}
            </DictionaryProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
