import "./globals.css";

export const metadata = {
  title: "TFW Help",
  description: "Ticket-First Workflow documentation viewer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

