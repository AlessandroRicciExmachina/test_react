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
import React, { useState, useContext } from "react";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import CoursesContext from "../data/courses-context";

const Courses: React.FC = () => {
  const courseCtx = useContext(CoursesContext);
  const [showCourseModal, setCourseModal] = useState(false);
  const [editCourse, setEditCouse] = useState<{
    id: string;
    title: string;
    enrolled: Date;
    goals: { id: string; text: string }[];
  } | null>(null);
  const setEditCouseHandler = (course: string) => {
    let courseToHandle = courseCtx.courses.filter(
      (corso) => corso.id === course
    );
    const courseToHandleElement = courseToHandle[0];
    setEditCouse(courseToHandleElement);
    setCourseModal(true);
  };
  const setCloseModal = () => {
    setCourseModal(false);
  };

  const courseHandler = (title: string, date: Date) => {
    courseCtx.addCourse(title, date);
  };

  return (
    <React.Fragment>
      <AddCourseModal
        show={showCourseModal}
        closeModal={setCloseModal}
        editCourse={editCourse}
        onSave={courseHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {courseCtx.courses.map((course) => {
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
