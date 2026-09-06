import React from 'react';
import './masthead.css';

export function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead__meta">
        <span className="masthead__edition">Edisi Khusus Praktikum Mandiri</span>
        <span>Bukit Jimbaran, Bali • Indonesia</span>
        <span>Tahun Akademik 2025/2026</span>
      </div>
      <div className="masthead__brand">
        <h1 className="masthead__title">The DevOps Chronicle</h1>
        <p className="masthead__subtitle">
          Warta Resmi Pengujian Sistem Otomasi Deployment Berkelanjutan
        </p>
      </div>
    </header>
  );
}
