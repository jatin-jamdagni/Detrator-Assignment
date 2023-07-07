import ProductCard from "@/components/ProductCard"
import SideBar from "@/components/SideBar"
import './globals.css'


export const metadata = {
  title: 'Posts.js',
  description: 'Job Assigment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", }}>
        {children}
        <div style={{ position: "fixed", right: "10px" }}>
          <SideBar />
        </div>
      </body>
    </html>
  )
}
