import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonButtons,
  IonList,
  IonIcon,
  IonButton,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { trash, createOutline, addOutline } from "ionicons/icons";

import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { COURSE_DATA } from "./Courses";
import EditModal from "../components/EditModal";
import EditableGoalItem from "../components/EditableGoalItem";
interface goalType {
  id: string;
  text: string;
}

const CourseGoal: React.FC = () => {
  const [startedDeletion, setStartedDeletion] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
  //NOTE: se usi 1 va modificato anche la prop editedGoal in editModal
  //   1) const [selectedGoal, setSelectedGoal] = useState<goalType|null>(null);
  //   2) const [selectedGoal, setSelectedGoal] = useState<{
  //     id: string;
  //     text: string;
  //   } | null>(null);
  //   3) const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  const selecteedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  const startDeleteGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setStartedDeletion(true);
  };
  const deleteGoalHandler = () => {
    console.log("delete");
    setToastMessage("Deleated goal");
  };
  const startEditGoalHandler = (event: React.MouseEvent, goalId: string) => {
    event.stopPropagation();
    const goal = selecteedCourse!.goals.find((g) => g.id === goalId);
    slidingOptionRef.current?.closeOpened();
    if (!goal) {
      return false;
    }
    setIsEditing(true);
    setSelectedGoal(goal);
  };
  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
    slidingOptionRef.current?.closeOpened();
  };

  const startAddGoalHandler = () => {
    console.log("startAddGoalHandler");
    setIsEditing(true);
  };

  return (
    <React.Fragment>
      {
        <EditModal
          show={isEditing}
          onCancel={cancelEditGoalHandler}
          editedGoal={selectedGoal}
        />
      }
      <IonToast
        isOpen={toastMessage ? true : false}
        onDidDismiss={() => setToastMessage("")}
        message={toastMessage}
        duration={2000}
        color="dark"
      />
      <IonAlert
        isOpen={startedDeletion}
        onDidDismiss={() => {
          setStartedDeletion(false);
          slidingOptionRef.current?.closeOpened();
        }}
        backdropDismiss={false}
        header={"Attenzione!"}
        message={"Vuoi davvero cancellare questa voce?"}
        buttons={[
          {
            text: "Si",
            handler: () => {
              deleteGoalHandler();
            },
          },
          {
            text: "No",
            role: "cancel",
            cssClass: "secondary",
          },
        ]}
      />

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" text=""></IonBackButton>
            </IonButtons>
            <IonTitle>
              {selecteedCourse ? selecteedCourse.title : "No Course To display"}
            </IonTitle>
            {isPlatform("android") && (
              <IonButton slot="end" fill="clear" onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline}></IonIcon>
              </IonButton>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selecteedCourse && (
            <IonList className="ion-no-padding">
              {selecteedCourse.goals.map((goal, i) => (
                <EditableGoalItem
                  key={i}
                  slidingRef={slidingOptionRef}
                  text={goal.text}
                  onStartDelete={startDeleteGoalHandler}
                  onStartEdit={(event) => startEditGoalHandler(event, goal.id)}
                />
              ))}
            </IonList>
          )}
          {!isPlatform("android") && (
            <IonFab
              vertical="bottom"
              horizontal="end"
              slot="fixed"
              color="secondary"
              onClick={startAddGoalHandler}
            >
              <IonFabButton>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};
export default CourseGoal;
