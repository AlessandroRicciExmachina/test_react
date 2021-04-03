import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + react",
    enrolled: new Date("12/24/2019"),
    goals: [
      { id: "c1g1", text: "Finish the course" },
      { id: "c1g2", text: "Study Hard" },
      { id: "c1g3", text: "Final considerations" },
    ],
  },
  {
    id: "c2",
    title: "react JS guide",
    enrolled: new Date("12/02/2019"),
    goals: [{ id: "c1g1", text: "Finish the course" }],
  },
  {
    id: "c3",
    title: "JavascriptS guide",
    enrolled: new Date("05/09/2019"),
    goals: [{ id: "c1g1", text: "Finish the course" }],
  },
];

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => {
            return (
              <IonRow key={course.id}>
                <IonCol size-md="4" offset-md="4">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>{course.title}</IonCardTitle>
                      <IonCardSubtitle>
                        Enrolled on{" "}
                        {course.enrolled.toLocaleDateString("it-IT", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="ion-text-right">
                        <IonButton
                          fill="clear"
                          routerLink={`/courses/${course.id}`}
                          color="secondary"
                        >
                          View course Goals
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Courses;
