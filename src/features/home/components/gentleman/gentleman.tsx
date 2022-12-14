import { DataGentlemanType } from '../../../../core/types/gentleman';
import { ButtonSelect } from '../button/button.select';
import { ButtonDelete } from '../button/button.delete';
import { Info } from '../info/info';

export function Gentleman({
    item,
    setSelected,
    setDeleted,
}: {
    item: DataGentlemanType;
    setSelected: (item: DataGentlemanType) => void;
    setDeleted: (item: DataGentlemanType) => void;
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
                    setSelected={setSelected}
                ></ButtonSelect>
                <ButtonDelete
                    item={item}
                    setDeleted={setDeleted}
                ></ButtonDelete>
            </li>
        </>
    );
}
