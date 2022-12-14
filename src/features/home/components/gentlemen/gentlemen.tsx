import { useEffect, useState } from 'react';
import { gentlemenData } from '../../../../core/mocks/gentlemen.data';
import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Gentleman } from '../gentleman/gentleman';

export function Gentlemen() {
    const items = gentlemenData;
    const initialState = [...items];
    const [updatedArray, setSelectedItem] = useState(initialState);

    useEffect(() => {
        console.log(updatedArray);
    }, [updatedArray]);

    const totalSelected = updatedArray.filter((item) => item.selected === true);

    const getSelected = (selectedItem: DataGentlemanType) => {
        function isSelected(item: DataGentlemanType) {
            const isSelectedItem =
                item.selected === false
                    ? { ...item, selected: true }
                    : { ...item, selected: false };
            return { ...isSelectedItem };
        }

        setSelectedItem(
            updatedArray.map((item) =>
                item.id === selectedItem.id ? isSelected(item) : item
            )
        );
    };

    return (
        <>
            <section className="controls">
                <p className="info">
                    {totalSelected.length} gentlemen pointing at you
                </p>
                <button className="button button--select">Select all</button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    {updatedArray.map((item: DataGentlemanType) => (
                        <Gentleman
                            item={item}
                            key={item.id.toString()}
                            setSelected={getSelected}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </>
    );
}
