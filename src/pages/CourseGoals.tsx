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
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonIcon,
  IonButton,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { trash, createOutline, addOutline } from "ionicons/icons";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { COURSE_DATA } from "./Courses";
import EditModal from "../components/EditModal";

interface goalType {
  id: string;
  text: string;
}

const CourseGoal: React.FC = () => {
  const [startedDeletion, setStartedDeletion] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [selectedGoal, setSelectedGoal] = useState<any>(null);

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
  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const goal = selecteedCourse!.goals.find((g) => g.id === goalId);
    if (!goal) {
      return false;
    }
    setIsEditing(true);
    setSelectedGoal(goal);
  };
  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };
  const swipeHandler = (event: CustomEvent, side: string) => {};

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
        onDidDismiss={() => setStartedDeletion(false)}
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
              {selecteedCourse.goals.map((goal) => (
                <IonItemSliding key={goal.id}>
                  <IonItemOptions side="start">
                    <IonItemOption
                      color="danger"
                      expandable
                      onClick={startDeleteGoalHandler}
                    >
                      <IonIcon slot="icon-only" icon={trash} />
                      Delete
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItem lines="full">
                    <IonLabel>{goal.text}</IonLabel>
                  </IonItem>
                  <IonItemOptions
                    side="end"
                    onIonSwipe={(event) => {
                      swipeHandler(event, "right");
                    }}
                  >
                    <IonItemOption
                      color="tertiary"
                      expandable
                      //   onClick={(event) => {
                      //     startEditGoal(event, +goal.id);
                      //   }}
                      ////! nella funzione bind l'evento sta sempre come primo parametro
                      onClick={startEditGoalHandler.bind(null, goal.id)}
                    >
                      <IonIcon slot="icon-only" icon={createOutline} />
                      Edit
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
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
