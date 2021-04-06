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
import React, { useContext } from "react";
import CoursesContext from "../data/courses-context";

const Filter: React.FC = () => {
  const courseFilterChangeHandler = (event: CustomEvent) => {
    console.log(event);
  };

  const courseCtx = useContext(CoursesContext);

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
          {courseCtx.courses.map((course, i) => (
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
