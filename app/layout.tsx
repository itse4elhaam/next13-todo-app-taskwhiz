import './globals.css'


export const metadata = {
  title: 'Create Next App',
}
 
export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<body className="bg-gradient-to-r from-slate-500  to-gray-500 text-white">
				{children}
			</body>
		</html>
  );
}
