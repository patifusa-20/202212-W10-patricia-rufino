export function ButtonSelectAll({
    setSelectAll,
}: {
    setSelectAll: () => void;
}) {
    const handlerSelectAll = () => {
        setSelectAll();
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
