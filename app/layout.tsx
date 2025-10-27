import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Tobias | Systemutvecklare",
  description: "Portfolio av Tobias – systemutvecklare inom Java & JavaScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={`${firaCode.className} bg-[#0d1117] text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
