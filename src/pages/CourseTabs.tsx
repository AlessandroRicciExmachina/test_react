import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { trophyOutline, list } from "ionicons/icons";
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AllGoals from "./AllGoals";
import CourseGoals from "./CourseGoals";
import Courses from "./Courses";

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/courses" to="/courses/list" exact />
        <Switch>
          {/* Garantisce che una sola route sia attiva */}
          <Route path="/courses/list" exact>
            <Courses />
          </Route>
          <Route path="/courses/all-goals" exact>
            <AllGoals />
          </Route>
          <Route path="/courses/:courseId">
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="coursesTab" href="/courses/list">
          <IonIcon icon={trophyOutline}></IonIcon>
          Courses
        </IonTabButton>
        <IonTabButton tab="all-goalsTab" href="/courses/all-goals">
          <IonIcon icon={list}></IonIcon>
          All Goals
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
export default CourseTabs;
