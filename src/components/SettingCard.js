import Chip from "./Chip";
import { IonCard, IonLabel } from "@ionic/react";
import "./SettingCard.css";
function SettingCard(props) {
    return (
        <>
            {/* <IonLabel className="title">vfgsij</IonLabel> */}
            <IonCard className="links-card">
                <Chip
                    props={props}
                    Label={props.TopLabel}
                    IconLeft={props.IconLeft}
                />
                <div className="line"></div>
                <Chip
                    props={props}
                    Label={props.BottomLabel}
                    IconLeft={props.IconLeftBottom}
                    IconRight={props.IconLeft}
                />
            </IonCard>
        </>

    );
}
export default SettingCard;
