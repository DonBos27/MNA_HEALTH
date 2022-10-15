import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import './SettingCard.css';
function Chip(props) {
  return (
    <>
      <IonChip className="chip" >
        <IonIcon icon={props.IconLeft} />
        <p>{props.Label}</p>
        <IonIcon icon={props.IconRight}></IonIcon>
      </IonChip>
    </>
  );
}

export default Chip;
