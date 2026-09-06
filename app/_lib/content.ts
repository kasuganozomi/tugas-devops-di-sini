import { StudentDossier, DeploymentRecord } from './types';

export const STUDENT_DOSSIER: StudentDossier = {
  nama: 'I Kadek Adi Sunetra',
  nim: '2305551053',
  programStudi: 'Program Studi Teknologi Informasi',
  fakultas: 'Fakultas Teknik',
  universitas: 'Universitas Udayana',
  mataKuliah: 'DevOps Development',
  kodeMataKuliah: '26STIE05X079',
  semester: 'Semester Genap 2025/2026',
  tugasKe: 2,
};

export const DEPLOYMENT_RECORD: DeploymentRecord = {
  judul: 'Verifikasi Otomasi Deployment Berkelanjutan',
  metode: 'GitHub Actions Self-Hosted Runner',
  protokol: 'Outbound Agent Polling (Port 443 HTTPS)',
  targetInfrastruktur: 'Dedicated Linux Cloud VPS • Nginx Web Server',
  pipelineStatus: 'OPERASIONAL',
  tanggalPublikasi: 'Maret 2026',
  deskripsiTeknis:
    'Aplikasi ini dibangun menggunakan arsitektur Next.js App Router murni tanpa dependensi berlebih, dirancang dengan tipografi editorial New York Times untuk memvalidasi alur integrasi dan pengantaran berkelanjutan (CI/CD) secara deterministik.',
};
