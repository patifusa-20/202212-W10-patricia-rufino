import { DataGentlemanType } from '../../../../core/types/gentleman';
import './button.css';

export function ButtonSelect({
    item,
    setSelected,
}: {
    item: DataGentlemanType;
    setSelected: (item: DataGentlemanType) => void;
}) {
    const handlerSelected = (item: DataGentlemanType) => {
        setSelected(item);
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
