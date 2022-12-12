import { DataGentlemanType } from '../../../../core/types/gentleman';

export function Info({ item }: { item: DataGentlemanType }) {
    return (
        <>
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={'assets/img/' + item.picture}
                    alt={item.alternativeText}
                />
                <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{item.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {item.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>{' '}
                        RIP
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>{' '}
                        Pending
                    </li>
                </ul>
            </div>
        </>
    );
}
