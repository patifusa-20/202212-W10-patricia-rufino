import { gentlemenData } from '../../../../core/mocks/gentlemen.data';
import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Gentleman } from '../gentleman/gentleman';

export function Gentlemen() {
    const items = gentlemenData;
    return (
        <>
            <section className="controls">
                <p className="info">0 gentlemen pointing at you</p>
                <button className="button button--select">Select all</button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    {items.map((item: DataGentlemanType) => (
                        <Gentleman
                            item={item}
                            key={item.id.toString()}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </>
    );
}
