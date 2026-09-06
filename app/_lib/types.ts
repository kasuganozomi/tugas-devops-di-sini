export interface StudentDossier {
  readonly nama: string;
  readonly nim: string;
  readonly programStudi: string;
  readonly fakultas: string;
  readonly universitas: string;
  readonly mataKuliah: string;
  readonly kodeMataKuliah: string;
  readonly semester: string;
  readonly tugasKe: number;
}

export interface DeploymentRecord {
  readonly judul: string;
  readonly metode: string;
  readonly protokol: string;
  readonly targetInfrastruktur: string;
  readonly pipelineStatus: 'OPERASIONAL' | 'VERIFIKASI' | 'TERUJI';
  readonly tanggalPublikasi: string;
  readonly deskripsiTeknis: string;
}
