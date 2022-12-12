import { DataGentlemanType } from '../../../../core/types/gentleman';

export function Button({ item }: { item: DataGentlemanType }) {
    const handlerClick = () => {
        item.selected;
    };

    return (
        <>
            <i className="icon gentleman__icon fas fa-check"></i>

            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </>
    );
}
