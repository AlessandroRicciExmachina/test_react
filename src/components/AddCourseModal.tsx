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
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React, { useRef } from "react";
const AddCourseModal: React.FC<{
  show: boolean;
  closeModal: () => void;
  editCourse: {
    id: string;
    title: string;
    enrolled: Date;
    goals: { id: string; text: string }[];
  } | null;
}> = (prop) => {
  const inputTitle = useRef<HTMLIonInputElement>(null);

  const saveCourse = () => {
    if (prop.editCourse) {
      const course = { ...prop.editCourse, title: inputTitle };
      console.log(course);
    } else {
      const course = {};
    }
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
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Goal</IonLabel>
                  <IonInput
                    type="text"
                    value={prop.editCourse?.title}
                    ref={inputTitle}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Enrolled Date</IonLabel>
                  <IonDatetime displayFormat="DD MM YYYY" />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton onClick={saveCourse}>Save</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};
export default AddCourseModal;
