import { useEffect, useState } from 'react';
import { gentlemenData } from '../../../../core/mocks/gentlemen.data';
import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Gentleman } from '../gentleman/gentleman';
import { Controls } from '../controls/controls';

export function Gentlemen() {
    const items = gentlemenData;
    const initialState = [...items];
    const [updatedArray, setItems] = useState(initialState);

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

        setItems(
            updatedArray.map((item) =>
                item.id === selectedItem.id ? isSelected(item) : item
            )
        );
    };

    const getDeleted = (selectedItem: DataGentlemanType) => {
        setItems(updatedArray.filter((item) => item.id !== selectedItem.id));
    };

    const getSelectAll = () => {
        setItems(
            updatedArray.map((item: DataGentlemanType) => {
                return { ...item, selected: true };
            })
        );
    };

    return (
        <>
            <Controls
                totalSelected={totalSelected}
                setSelectAll={getSelectAll}
            ></Controls>
            <main className="main">
                <ul className="gentlemen">
                    {updatedArray.map((item: DataGentlemanType) => (
                        <Gentleman
                            item={item}
                            key={item.id.toString()}
                            setSelected={getSelected}
                            setDeleted={getDeleted}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </>
    );
}
