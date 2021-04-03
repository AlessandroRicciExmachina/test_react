import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { parentPort } from "node:worker_threads";
import React, { useState } from "react";
interface goalType {
  id: string;
  text: string;
}
const EditModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  //   editedGoal: goalType | null;
  //   editedGoal: any;
  editedGoal: { id: string; text: string } | null;
}> = (props) => {
  const [text, setText] = useState<string>();

  return (
    <React.Fragment>
      <IonModal   isOpen={props.show}>
       



	   <IonHeader>
          <IonToolbar>
            <IonTitle>
              {props.editedGoal
                ? `Edit goal ${props.editedGoal.text}`
                : "Add a Goal"}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonList>
                  <IonItem>
                    <IonLabel position="floating">Your Goal</IonLabel>
                    <IonInput
                      type="text"
                      value={props.editedGoal?.text}
                    ></IonInput>
                  </IonItem>
                </IonList>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton fill="clear" onClick={() => props.onCancel()}>
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton fill="solid" color="secondary">
                  Save
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </React.Fragment>
  );
};

export default EditModal;
