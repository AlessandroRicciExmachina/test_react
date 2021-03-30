import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const AllGoals: React.FC = () => {
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
        <h2>All goals page</h2>
      </IonContent>
    </IonPage>
  );
};
export default AllGoals;
