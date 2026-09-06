import React from 'react';
import { DEPLOYMENT_RECORD } from '../../_lib/content';
import './pipeline-status.css';

export function PipelineStatus() {
  return (
    <article className="pipeline-status" aria-label="Catatan Verifikasi Pipeline">
      <h2 className="pipeline-status__headline">
        {DEPLOYMENT_RECORD.judul}
      </h2>

      <p className="pipeline-status__lead">
        {DEPLOYMENT_RECORD.deskripsiTeknis}
      </p>

      <div className="pipeline-status__table-wrapper">
        <table className="pipeline-status__table">
          <thead>
            <tr>
              <th>Parameter Sistem</th>
              <th>Nilai Konfigurasi Terverifikasi</th>
              <th>Status Audit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pipeline-status__param">Metodologi Deployment</td>
              <td className="pipeline-status__value">{DEPLOYMENT_RECORD.metode}</td>
              <td><span className="pipeline-status__badge">Teruji</span></td>
            </tr>
            <tr>
              <td className="pipeline-status__param">Protokol Jaringan</td>
              <td className="pipeline-status__value">{DEPLOYMENT_RECORD.protokol}</td>
              <td><span className="pipeline-status__badge">Teruji</span></td>
            </tr>
            <tr>
              <td className="pipeline-status__param">Infrastruktur Target</td>
              <td className="pipeline-status__value">{DEPLOYMENT_RECORD.targetInfrastruktur}</td>
              <td><span className="pipeline-status__badge">Teruji</span></td>
            </tr>
            <tr>
              <td className="pipeline-status__param">Strategi Sinkronisasi</td>
              <td className="pipeline-status__value">Clean Rsync (Atomic Exclude .git &amp; .github)</td>
              <td><span className="pipeline-status__badge">Teruji</span></td>
            </tr>
            <tr>
              <td className="pipeline-status__param">Kondisi Operasional</td>
              <td className="pipeline-status__value">Sistem Berjalan Aktif via Daemon Systemd</td>
              <td><span className="pipeline-status__badge">Lolos</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pipeline-status__box">
        <div className="pipeline-status__box-title">Catatan Redaksi Rekayasa Sistem</div>
        <p className="pipeline-status__box-text">
          Pembaruan halaman ini dihasilkan secara otomatis melalui mekanisme Continuous Deployment (CD)
          yang dieksekusi oleh runner privat pada server cloud, mengeliminasi kebutuhan intervensi manual
          maupun pembukaan port administrasi SSH ke jaringan publik.
        </p>
      </div>
    </article>
  );
}
