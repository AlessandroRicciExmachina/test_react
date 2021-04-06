import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import CoursesContext from "../data/courses-context";

const AllGoals: React.FC = () => {
  const courseCtx = useContext(CoursesContext);
  const goals = courseCtx.courses
    .map((course) => {
      return course.goals.map((goal) => {
        return { ...goal, courseTitle: course.title };
      });
    })
    .reduce((accumulator, currentValue) => {
      let container = accumulator;
      for (const goal of currentValue) {
        container.push(goal);
      }
      return container;
    }, []);

  console.log(goals);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>All goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {goals.map((goalElement) => (
            <IonItem key={goalElement.id}>
              <IonLabel>
                <h2>{goalElement.text}</h2>
                <p>{goalElement.courseTitle}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default AllGoals;
