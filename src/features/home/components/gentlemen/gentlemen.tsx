import { Gentleman } from '../gentleman/gentleman';

export function Gentlemen() {
    return (
        <>
            <section className="controls">
                <p className="info">0 gentlemen pointing at you</p>
                <button className="button button--select">Select all</button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    <Gentleman></Gentleman>
                </ul>
            </main>
        </>
    );
}
