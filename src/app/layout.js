import "./../app/globals.css";
import "./../assets/css/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
