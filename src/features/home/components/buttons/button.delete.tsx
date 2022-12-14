import { DataGentlemanType } from '../../../../core/types/gentleman';
import './button.css';

export function ButtonDelete({
    item,
    setDeleted,
}: {
    item: DataGentlemanType;
    setDeleted: (item: DataGentlemanType) => void;
}) {
    const handlerDelete = (item: DataGentlemanType) => {
        setDeleted(item);
    };

    return (
        <>
            <i
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                onClick={() => {
                    handlerDelete(item);
                }}
            ></i>
        </>
    );
}
