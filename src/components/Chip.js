import { IonChip, IonIcon, IonLabel } from "@ionic/react";

function Chip(props) {
  return (
    <>
      <IonChip className="chip">
        <IonIcon icon={props.IconLeft} />
        <IonLabel>{props.Label}</IonLabel>
        <IonIcon icon={props.props.IconRight}></IonIcon>
      </IonChip>
    </>
  );
}

export default Chip;
