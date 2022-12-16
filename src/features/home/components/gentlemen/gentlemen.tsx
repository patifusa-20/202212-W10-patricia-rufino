import { useState } from 'react';
import { gentlemenData } from '../../../../core/model/gentlemen.data';
import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Gentleman } from '../gentleman/gentleman';
import { Controls } from '../controls/controls';

export function Gentlemen() {
    const items = gentlemenData;
    const initialState = [...items];
    const [updatedArray, setItems] = useState(initialState);

    const totalSelected = updatedArray.filter((item) => item.selected === true);

    const toggleSelectStateOfGentleman = (selectedItem: DataGentlemanType) => {
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

    const deleteGentleman = (selectedItem: DataGentlemanType) => {
        setItems(updatedArray.filter((item) => item.id !== selectedItem.id));
    };

    const selectAllSelectedGentlemen = () => {
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
                selectAllSelectedGentlemen={selectAllSelectedGentlemen}
            ></Controls>
            <main className="main">
                <ul className="gentlemen">
                    {updatedArray.map((item: DataGentlemanType) => (
                        <Gentleman
                            item={item}
                            key={item.id.toString()}
                            toggleSelectStateOfGentleman={
                                toggleSelectStateOfGentleman
                            }
                            deleteGentleman={deleteGentleman}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </>
    );
}
