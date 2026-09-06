import React from 'react';
import { Masthead } from './_components/masthead/masthead';
import { StudentDossier } from './_components/student-dossier/student-dossier';
import { PipelineStatus } from './_components/pipeline-status/pipeline-status';
import { STUDENT_DOSSIER } from './_lib/content';

export default function HomePage() {
  return (
    <main>
      <Masthead />
      <StudentDossier />
      <PipelineStatus />
      
      <footer style={{
        marginTop: '3rem',
        paddingTop: '1.5rem',
        paddingBottom: '2.5rem',
        borderTop: '3px double var(--color-border)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.78rem',
        color: 'var(--color-ink-muted)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <span>
          &copy; {new Date().getFullYear()} {STUDENT_DOSSIER.nama} &bull; {STUDENT_DOSSIER.nim}
        </span>
        <span>
          {STUDENT_DOSSIER.programStudi} &bull; {STUDENT_DOSSIER.universitas}
        </span>
      </footer>
    </main>
  );
}
