import type { Metadata } from 'next';
import './globals.css';
import { STUDENT_DOSSIER } from './_lib/content';

export const metadata: Metadata = {
  title: `${STUDENT_DOSSIER.nama} (${STUDENT_DOSSIER.nim}) • DevOps Verification Hub`,
  description: 'Aplikasi pembuktian praktikum CI/CD menggunakan GitHub Actions Self-Hosted Runner di Cloud VPS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="site-container">
          {children}
        </div>
      </body>
    </html>
  );
}
