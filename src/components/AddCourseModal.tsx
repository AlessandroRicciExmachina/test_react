import {
  IonContent,
  IonModal,
  IonButton,
  IonInput,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonDatetime,
  IonText,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
const AddCourseModal: React.FC<{
  show: boolean;
  closeModal: () => void;
  editCourse: {
    id: string;
    title: string;
    enrolled: Date;
    goals: { id: string; text: string }[];
  } | null;
  onSave: (title: string, date: Date) => void;
}> = (prop) => {
  const [error, setErroState] = useState("");

  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);
  const saveHandler = () => {
    if (prop.editCourse) {
      const course = { ...prop.editCourse, title: titleRef };
      console.log(course);
    } else {
      const enteredTitle = titleRef.current!.value;
      const selectedDate = dateRef.current!.value;
      console.log(enteredTitle, selectedDate);
      if (
        !enteredTitle ||
        !selectedDate ||
        enteredTitle.toString().trim().length == 0 ||
        selectedDate.toString().length == 0
      ) {
        setErroState("Please enter valid data");
        return;
      } else {
        setErroState("");
        prop.onSave(enteredTitle.toString(), new Date(selectedDate));
        prop.closeModal();
      }
    }
  };

  const resetHandler = () => {
    prop.closeModal();
  };

  return (
    <IonContent>
      <IonModal isOpen={prop.show} cssClass="my-custom-class">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              {prop.editCourse
                ? `Edit Course:${prop.editCourse.title}`
                : "Add course"}
            </IonTitle>
            <IonButton
              color="primary"
              slot="end"
              fill="clear"
              onClick={() => prop.closeModal()}
            >
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {error ? (
              <IonRow>
                <IonCol>
                  <IonText color="danger" className="ion-text-center">
                    <p>{error}</p>
                  </IonText>
                </IonCol>
              </IonRow>
            ) : (
              ""
            )}

            <IonRow></IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Goal</IonLabel>
                  <IonInput
                    type="text"
                    value={prop.editCourse?.title}
                    ref={titleRef}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Enrolled Date</IonLabel>
                  <IonDatetime ref={dateRef} displayFormat="DD MM YYYY" />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton fill="clear" onClick={resetHandler}>
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-right">
                <IonButton onClick={saveHandler}>Save</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};
export default AddCourseModal;
