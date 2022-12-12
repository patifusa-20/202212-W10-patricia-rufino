import { DataGentlemanType } from '../../../../core/types/gentleman';

export function Button({
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

            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </>
    );
}
