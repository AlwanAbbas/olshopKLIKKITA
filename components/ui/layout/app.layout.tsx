import Navbar from "../navbar.js"
import Footer from "../footer.js"
import { PropsWithChildren } from "react"

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}
