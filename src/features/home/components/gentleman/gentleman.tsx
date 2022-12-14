import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Button } from '../button/button';
import { Info } from '../info/info';

export function Gentleman({
    item,
    setSelected,
}: {
    item: DataGentlemanType;
    setSelected: (item: DataGentlemanType) => void;
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
                <Button item={item} setSelected={setSelected}></Button>
            </li>
        </>
    );
}
