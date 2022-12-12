import { DataGentlemanType } from '../../../../core/types/gentleman';
import { gentlemenData } from '../../../../core/mocks/gentlemen.data';
import { Button } from '../button/button';
import { Info } from '../info/info';

export function Gentleman() {
    const items = gentlemenData;
    return (
        <>
            {items.map((item: DataGentlemanType) => {
                return (
                    <li className="gentleman">
                        <Info item={item}></Info>
                        <Button></Button>
                    </li>
                );
            })}
        </>
    );
}
