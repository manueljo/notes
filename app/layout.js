import './globals.css';
import AuthProvider from "@/context/AuthContext";

export const metadata = {
  title: 'NOTES | NOTES TAKING APP',
  description: 'This is my application where you can manage your notes and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@200..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <AuthProvider>
        <body>
          <div id="app">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
