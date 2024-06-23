export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        {children}
      </body>
    </html>
  );
}
