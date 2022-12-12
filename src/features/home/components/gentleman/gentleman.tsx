import { useEffect, useState } from 'react';
import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Button } from '../button/button';
import { Info } from '../info/info';

export function Gentleman({ item }: { item: DataGentlemanType }) {
    const initialState = { ...item };
    const [selectedItem, setSelectedItem] = useState(initialState);

    useEffect(() => {
        console.log(selectedItem);
    }, [selectedItem]);

    const getSelected = (selectedItem: DataGentlemanType) => {
        setSelectedItem(
            selectedItem.selected === false
                ? { ...selectedItem, selected: true }
                : { ...selectedItem, selected: false }
        );
    };

    return (
        <>
            <li
                className={
                    selectedItem.selected === false
                        ? 'gentleman'
                        : 'gentleman selected'
                }
                id={'item_' + item.id}
            >
                <Info item={item}></Info>
                <Button item={selectedItem} setSelected={getSelected}></Button>
            </li>
        </>
    );
}
