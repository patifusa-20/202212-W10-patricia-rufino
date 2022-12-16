import { DataGentlemanType } from '../../../../core/types/gentleman';
import './button.css';

export function ButtonSelect({
    item,
    toggleSelectStateOfGentleman,
}: {
    item: DataGentlemanType;
    toggleSelectStateOfGentleman: (item: DataGentlemanType) => void;
}) {
    const handlerSelected = (item: DataGentlemanType) => {
        toggleSelectStateOfGentleman(item);
    };

    return (
        <>
            <i
                className="icon gentleman__icon fas fa-check"
                onClick={() => {
                    handlerSelected(item);
                }}
            ></i>
        </>
    );
}
