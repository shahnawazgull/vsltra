// app/layout.js (or components/layout.js, depending on your folder structure)
import { UserProvider } from '/components/context/UserContext'; // Adjust the import path if necessary

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the children with UserProvider so that user context is available throughout the app */}
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
