import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import './SettingCard.css';
function Chip(props) {
  return (
    <div>
      <IonChip className="chip" >
        <IonIcon icon={props.IconLeft} />
        <IonLabel>{props.Label}</IonLabel>
        <IonIcon icon={props.props.IconRight}></IonIcon>
      </IonChip>
    </div>
  );
}

export default Chip;
