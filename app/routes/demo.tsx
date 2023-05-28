import { Link } from "@remix-run/react"

export default function DemoPage() {
    return (
        <div>
            <h1>Demo Page</h1>
            {/* Link makes no request to the server for the html, this will run client side and provide a SAP experience.  */}
            <Link to="/">Home Page</Link>
        </div>
    )
}