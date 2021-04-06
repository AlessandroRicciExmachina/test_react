import {
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonItem,
  IonLabel,
  IonItemSliding,
} from "@ionic/react";
import { trash, createOutline } from "ionicons/icons";
import React from "react";
const EditableGoalItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: (event: React.MouseEvent) => void;
  onStartEdit: (event: React.MouseEvent) => void;
  text: string;
}> = (props) => {
  return (
    <IonItemSliding ref={props.slidingRef}>
      <IonItemOptions side="start">
        <IonItemOption color="danger" expandable onClick={props.onStartDelete}>
          <IonIcon slot="icon-only" icon={trash} />
          Delete
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines="full">
        <IonLabel>{props.text}</IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="tertiary" expandable onClick={props.onStartEdit}>
          <IonIcon slot="icon-only" icon={createOutline} />
          Edit
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default EditableGoalItem;
