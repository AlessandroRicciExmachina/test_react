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
  IonText,
} from "@ionic/react";
import { parentPort } from "node:worker_threads";
import React, { useState, useRef } from "react";
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
  onSave: (goalText: string) => void;
}> = (props) => {
  const [text, setText] = useState<string>();
  const [error, setError] = useState<string>("");

  const textRef = useRef<HTMLIonInputElement>(null);
  const saveHandler = () => {
    const enteredText = textRef.current!.value;
    if (!enteredText) {
      setError("Please enter valid text");
      return 0;
    }
    props.onSave(enteredText.toString());
    props.onCancel();
  };

  return (
    <React.Fragment>
      <IonModal isOpen={props.show}>
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
            {error ? (
              <IonRow>
                <IonCol>
                  <IonText>{error}</IonText>
                </IonCol>
              </IonRow>
            ) : (
              ""
            )}

            <IonRow>
              <IonCol>
                <IonList>
                  <IonItem>
                    <IonLabel position="floating">Your Goal</IonLabel>
                    <IonInput
                      type="text"
                      value={props.editedGoal?.text}
                      ref={textRef}
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
                <IonButton fill="solid" color="secondary" onClick={saveHandler}>
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
