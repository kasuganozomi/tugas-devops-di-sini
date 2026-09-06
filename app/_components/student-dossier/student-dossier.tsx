import React from 'react';
import { STUDENT_DOSSIER } from '../../_lib/content';
import './student-dossier.css';

export function StudentDossier() {
  return (
    <section className="student-dossier" aria-label="Identitas Mahasiswa Pengembang">
      <div className="student-dossier__heading">
        Dokumen Identitas &bull; Pelaksana Praktikum
      </div>

      <div className="student-dossier__grid">
        <div className="student-dossier__item">
          <span className="student-dossier__label">Nama Mahasiswa</span>
          <span className="student-dossier__value">{STUDENT_DOSSIER.nama}</span>
          <span className="student-dossier__meta">
            {STUDENT_DOSSIER.programStudi} &bull; {STUDENT_DOSSIER.fakultas}
          </span>
        </div>

        <div className="student-dossier__item">
          <span className="student-dossier__label">Nomor Induk Mahasiswa (NIM)</span>
          <span className="student-dossier__value student-dossier__value--nim">
            {STUDENT_DOSSIER.nim}
          </span>
          <span className="student-dossier__meta">
            {STUDENT_DOSSIER.mataKuliah} ({STUDENT_DOSSIER.kodeMataKuliah}) &bull; Tugas {STUDENT_DOSSIER.tugasKe}
          </span>
        </div>
      </div>
    </section>
  );
}
