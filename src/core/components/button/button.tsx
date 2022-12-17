import { DataGentlemanType } from '../../types/gentleman';
import './button.css';

export function Button({
    item,
    actionButtonGentleman,
    classBtn,
}: {
    item: DataGentlemanType;
    actionButtonGentleman: (item: DataGentlemanType) => void;
    classBtn: string;
}) {
    const handlerGentleman = (item: DataGentlemanType) => {
        actionButtonGentleman(item);
    };

    return (
        <>
            <i
                className={'icon gentleman__icon fas ' + classBtn}
                onClick={() => {
                    handlerGentleman(item);
                }}
            ></i>
        </>
    );
}
