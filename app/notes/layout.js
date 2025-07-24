import { Suspense } from 'react';

export default function NotesPageLayout({children}) {
  return (
        <>
            <Suspense fallback={<h6>Loading...</h6>}>
                {children}
            </Suspense>
        </>
  );
}