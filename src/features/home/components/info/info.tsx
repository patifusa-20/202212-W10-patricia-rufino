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
                <span className="gentleman__initial">
                    {item.picture[0].split('')[0].toUpperCase()}
                </span>
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
                        {item.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>{' '}
                        {item.twitter}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Selected:</span>{' '}
                        {item.selected ? 'true' : 'false'}
                    </li>
                </ul>
            </div>
        </>
    );
}
