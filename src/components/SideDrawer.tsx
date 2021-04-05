import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { list, options } from "ionicons/icons";
import React from "react";
const SideDrawer: React.FC = () => {
  return (
    <IonMenu contentId="main" swipeGesture={false}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Course Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem
              button
              routerLink="/courses/all-goals"
              routerDirection="none"
            >
              <IonIcon slot="start" icon={list} />
              <IonItem>All goals</IonItem>
            </IonItem>
            <IonItem button routerLink="/filter" routerDirection="none">
              <IonIcon slot="start" icon={options} />
              <IonItem>Filter</IonItem>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default SideDrawer;
