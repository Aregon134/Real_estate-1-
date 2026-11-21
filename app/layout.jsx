import "@/styles/utilities.css";
import "@/styles/fonts.css";
import "@/styles/theme.css";
import "@/styles/display-fonts.css";
import "@/styles/identity.css";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteInteractions } from "@/components/SiteInteractions";
export const metadata = {
  title: "Ziggloom",
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};
export default function Layout({ children }) {
  return (
    <html
      lang="en-IN"
      className="Sms4YG_variable f7tCIa_variable LyTxPG_variable _1ckQRG_variable jsBmNq_variable hIgTkq_variable h-full antialiased"
    >
      <body className="grain min-h-full bg-ink-0 text-ink-1000 flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        {children}
        <RevealObserver />
        <SiteInteractions />
      </body>
    </html>
  );
}
