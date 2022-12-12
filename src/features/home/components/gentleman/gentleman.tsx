import { DataGentlemanType } from '../../../../core/types/gentleman';
import { Button } from '../button/button';
import { Info } from '../info/info';

export function Gentleman({ item }: { item: DataGentlemanType }) {
    return (
        <>
            <li className={'gentleman' + (item.selected ? ' selected' : '')}>
                <Info item={item}></Info>
                <Button item={item}></Button>
            </li>
        </>
    );
}
