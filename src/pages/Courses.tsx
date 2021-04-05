import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";
import AddGoalModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";

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
    goals: [{ id: "c2g1", text: "Finish the course c3" }],
  },
  {
    id: "c3",
    title: "JavascriptS guide",
    enrolled: new Date("05/09/2019"),
    goals: [{ id: "c3g1", text: "Finish the course c3" }],
  },
];

const Courses: React.FC = () => {
  const [showCourseModal, setCourseModal] = useState(false);
  const [editCourse, setEditCouse] = useState<{
    id: string;
    title: string;
    enrolled: Date;
    goals: { id: string; text: string }[];
  } | null>(null);
  const setEditCouseHandler = (course: string) => {
    let courseToHandle = COURSE_DATA.filter((corso) => corso.id === course);
    const courseToHandleElement = courseToHandle[0];
    setEditCouse(courseToHandleElement);
    setCourseModal(true);
  };
  const setCloseModal = () => {
    setCourseModal(false);
  };

  return (
    <React.Fragment>
      <AddGoalModal
        show={showCourseModal}
        closeModal={setCloseModal}
        editCourse={editCourse}
      />
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
                    <CourseItem
                      id={course.id}
                      title={course.title}
                      enrolmentDate={course.enrolled}
                      setEditCouseHandler={setEditCouseHandler}
                    />
                  </IonCol>
                </IonRow>
              );
            })}
          </IonGrid>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton
              onClick={() => {
                setEditCouse(null);
                setCourseModal(true);
              }}
            >
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};
export default Courses;
