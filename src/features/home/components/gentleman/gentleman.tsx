import { DataGentlemanType } from '../../../../core/types/gentleman';
import { ButtonSelect } from '../buttons/button.select';
import { ButtonDelete } from '../buttons/button.delete';
import { Info } from '../info/info';
import './gentleman.css';

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
                <ButtonSelect
                    item={item}
                    toggleSelectStateOfGentleman={toggleSelectStateOfGentleman}
                ></ButtonSelect>
                <ButtonDelete
                    item={item}
                    deleteGentleman={deleteGentleman}
                ></ButtonDelete>
            </li>
        </>
    );
}
