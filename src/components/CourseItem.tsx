import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import React from "react";

const CourseItem: React.FC<{
  id: string;
  title: string;
  enrolmentDate: Date;
  setEditCouseHandler: (id: string) => void;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>
          Enrolled on{" "}
          {props.enrolmentDate.toLocaleDateString("it-IT", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                fill="clear"
                routerLink={`/courses/${props.id}`}
                color="secondary"
              >
                View course Goals
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                fill="clear"
                color="secondary"
                onClick={() => {
                  props.setEditCouseHandler(props.id);
                }}
              >
                Edit Course
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default CourseItem;
