import { DataGentlemanType } from '../../../../core/types/gentleman';
import { ButtonSelectAll } from '../buttons/button.selectAll';
import './controls.css';

export function Controls({
    totalSelected,
    setSelectAll,
}: {
    totalSelected: Array<DataGentlemanType>;
    setSelectAll: () => void;
}) {
    return (
        <>
            <section className="controls">
                <p className="info">
                    {totalSelected.length} gentlemen pointing at you
                </p>
                <ButtonSelectAll setSelectAll={setSelectAll}></ButtonSelectAll>
            </section>
        </>
    );
}
