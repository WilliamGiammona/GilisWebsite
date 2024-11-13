import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar />
      <main className="lg:ml-64 pt-[72px] lg:pt-0">{children}</main>
    </div>
  );
}
