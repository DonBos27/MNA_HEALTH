import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import './SettingCard.css';
const Chip = (props) => {
  return (
    <>
      <IonChip className="chip" onClick={props.onclick}>
        <IonIcon icon={props.IconLeft} />
        <p>{props.Label}</p>
        <IonIcon icon={props.IconRight}></IonIcon>
      </IonChip>
    </>
  );
}

export default Chip;
