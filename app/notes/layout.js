import { Suspense } from 'react';

export default function NotesPageLayout({children}) {
  return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                {children}
            </Suspense>
        </>
  );
}