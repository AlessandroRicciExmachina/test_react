import { constructOutline } from "ionicons/icons";
import React, { useState } from "react";
import { isPropertySignature } from "typescript";
import CoursesContext, { Course, Goal } from "./courses-context";
const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "Ionic + react",
      enrolled: new Date("12/24/2019"),
      goals: [],
    },
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: new Date().toString(),
      title: title,
      enrolled: date,
      goals: [],
    };

    setCourses((curCourse) => {
      return curCourse.concat(newCourse);
    });
  };
  const addGoal = (courseId: string, goalText: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text: goalText,
    };
    var i = 0;
    setCourses((courses) => {
      const updatedCourseAll = courses;
      const courseToUpdate = courses.findIndex(
        (course) => course.id == courseId
      );

      const updatedCourse = courses[courseToUpdate].goals.concat(newGoal);
      updatedCourseAll[courseToUpdate].goals = updatedCourse;
      return updatedCourseAll;
    });

    //  setCourses((courses) => {
    //    /////prendi i corsi
    //    const updatedCourses = [...courses];
    //    ////trova ld del corso da scrivere
    //    const updatedCourseIndex = updatedCourses.findIndex(
    //      (course) => course.id == courseId
    //    );
    //    ////prendi tutti i goas e aggiungi il nuovo in una variabile
    //    const updatedCourseGoal = updatedCourses[updatedCourseIndex].goals.concat(
    //      newGoal
    //    );
    //    ////aggiorna i corsi con i nuovi goal
    //    updatedCourses[updatedCourseIndex].goals = updatedCourseGoal;
    //    return updatedCourses;
    //  });
  };
  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((curCourses) => {
      const updatedCourseAll = courses;
      const courseIdToUpdate = courses.findIndex(
        (course) => course.id == courseId
      );
      const updatedCourse = courses[courseIdToUpdate].goals.filter(
        (goal) => goal.id !== goalId
      );

      updatedCourseAll[courseIdToUpdate].goals = updatedCourse;
      return updatedCourseAll;
    });
  };
  const updateGoal = (courseId: string, goalId: string, goalText: string) => {
    setCourses((curCourses) => {
      let allCourses = courses;
      const courseIndexToUpdate = allCourses.findIndex(
        (course) => course.id == courseId
      );
      let allGoals = allCourses[courseIndexToUpdate].goals;
      const goalIdToUpdate = allGoals.findIndex((goal) => goal.id == goalId);
      let goalUpdated = allGoals[goalIdToUpdate];
      goalUpdated.text = goalText;
      allCourses[courseIndexToUpdate].goals[goalIdToUpdate] = goalUpdated;
      return allCourses;
    });
  };

  return (
    <CoursesContext.Provider
      value={{
        courses: courses,
        addCourse: addCourse,
        addGoal: addGoal,
        deleteGoal: deleteGoal,
        updateGoal: updateGoal,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};
export default CoursesContextProvider;
