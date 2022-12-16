import { DataGentlemanType } from '../../../../core/types/gentleman';
import { ButtonSelectAll } from '../buttons/button.selectAll';
import './controls.css';

export function Controls({
    totalSelected,
    selectAllSelectedGentlemen,
}: {
    totalSelected: Array<DataGentlemanType>;
    selectAllSelectedGentlemen: () => void;
}) {
    return (
        <>
            <section className="controls">
                <p className="info">
                    {totalSelected.length} gentlemen pointing at you
                </p>
                <ButtonSelectAll
                    selectAllSelectedGentlemen={selectAllSelectedGentlemen}
                ></ButtonSelectAll>
            </section>
        </>
    );
}
