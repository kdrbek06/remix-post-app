import {Outlet, LiveReload, Link} from "@remix-run/react";
import globalStylesUrl from '~/styles/global.css'


export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    )
}
function Document ({ children, title}) {
    return (
        <html lang={'en'}>
        <head>
            <link rel={'stylesheet'} href={globalStylesUrl} />
            <title>My Remix App</title>
        </head>
        <body className={'bg-gray'}>
        {children}
        {process.env.NODE_ENV === 'development'
            ? <LiveReload />
            : null }
        </body>
        </html>
    )
}

function Layout ({children}) {
    return (
        <>
            <nav className={'navbar'}>
                <Link to={'/'} className={'Logo'}>
                    Remix
                </Link>

                <ul className="nav">
                    <li>
                        <Link to={'/posts'}>Posts</Link>
                    </li>
                </ul>
            </nav>

            <div className={'container'}>
                {children}
            </div>
        </>
    )
}


export  function ErrorBoundary({error}) {
    console.log('error', error)
    return (
        <Document>
            <Layout>
                <h1>Error</h1>
                <p>{error.message}</p>
            </Layout>
        </Document>
    )
}