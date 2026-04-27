import LargeIcon from '../../media/icons/icon-large.jpg'
import SmallIcon from '../../media/icons/icon-small.jpg'
import './Divider_mirrored.css';

export default function Divider_mirrored() {
    return (
        <div className="divider-mirrored">
            <div className="divider-mirrored-icons">
                <img src={SmallIcon} alt="Icon 1" className="divider-mirrored-icon small" />
                <img src={LargeIcon} alt="Icon 2" className="divider-mirrored-icon large" />
            </div>
        </div>
    );
}