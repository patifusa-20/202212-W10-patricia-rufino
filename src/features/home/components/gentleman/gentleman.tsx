import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Info } from '../info/info';
import './gentleman.css';
import { Button } from '../../../../core/components/button/button';

export function Gentleman({
    item,
    toggleSelectStateOfGentleman,
    deleteGentleman,
}: {
    item: DataGentlemanType;
    toggleSelectStateOfGentleman: (item: DataGentlemanType) => void;
    deleteGentleman: (item: DataGentlemanType) => void;
}) {
    return (
        <>
            <li
                className={
                    item.selected === false ? 'gentleman' : 'gentleman selected'
                }
                id={'item_' + item.id}
            >
                <Info item={item}></Info>
                <Button
                    item={item}
                    actionButtonGentleman={deleteGentleman}
                    classBtn={`gentleman__icon--delete fa-times`}
                ></Button>
                <Button
                    item={item}
                    actionButtonGentleman={toggleSelectStateOfGentleman}
                    classBtn={`fa-check`}
                ></Button>
            </li>
        </>
    );
}
