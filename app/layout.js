
export const metadata = {
  title: 'NOTES | NOTES TAKING APP',
  description: 'This is my application where you can manage your notes and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <div id="app">{children}</div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
