export function ButtonSelectAll({
    selectAllSelectedGentlemen,
}: {
    selectAllSelectedGentlemen: () => void;
}) {
    const handlerSelectAll = () => {
        selectAllSelectedGentlemen();
    };

    return (
        <>
            <button
                className="button button--select"
                onClick={() => {
                    handlerSelectAll();
                }}
            >
                Select all
            </button>
        </>
    );
}
