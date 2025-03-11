import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кармадонова Диана - фронтенд-разработчик",
  description: "Портфолио веб-разработчика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
