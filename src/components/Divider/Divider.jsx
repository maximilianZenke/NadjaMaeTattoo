import LargeIcon from '../../media/icons/icon-large.jpg'
import SmallIcon from '../../media/icons/icon-small.jpg'
import './Divider.css';

export default function Divider() {
  return (
    <div className="divider">
      <div className="divider-icons">
        <img src={LargeIcon} alt="Icon 1" className="divider-icon large" />
        <img src={SmallIcon} alt="Icon 2" className="divider-icon small" />
      </div>
    </div>
  );
}