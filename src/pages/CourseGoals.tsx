import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonButtons,
  IonItem,
  IonList,
  IonLabel,
} from "@ionic/react";
import { constructOutline } from "ionicons/icons";
import React from "react";
import { useParams } from "react-router-dom";
import { COURSE_DATA } from "./Courses";

const CourseGoal: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  const selecteedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text=""></IonBackButton>
          </IonButtons>
          <IonTitle>
            {selecteedCourse ? selecteedCourse.title : "No Course To display"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selecteedCourse && (
          <IonList>
            {selecteedCourse.goals.map((goal) => (
              <IonItem key={goal.id} lines="full">
                <IonLabel>{goal.text}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};
export default CourseGoal;
