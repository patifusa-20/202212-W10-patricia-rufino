import { Header } from '../header/header';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <div className="App">
            <div className="container">
                <Header></Header>
                {children}
            </div>
        </div>
    );
}
