import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import { COURSE_DATA } from "./Courses";

const Filter: React.FC = () => {
  const courseFilterChangeHandler = (event: CustomEvent) => {
    console.log(event);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {COURSE_DATA.map((course, i) => (
            <IonItem key={i}>
              <IonLabel>{course.title}</IonLabel>
              <IonToggle
                value={course.id}
                onIonChange={courseFilterChangeHandler}
              ></IonToggle>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Filter;
