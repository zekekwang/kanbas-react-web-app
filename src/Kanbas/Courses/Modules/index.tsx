import { useState, useEffect } from "react";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
// import * as db from "../../Database";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import { useSelector, useDispatch } from "react-redux";
import { current } from "@reduxjs/toolkit";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;

  const dispatch = useDispatch();

  const saveModule = async (module: any) => {
    const { editing, ...moduleData } = module; // Remove transient properties
    await modulesClient.updateModule(moduleData);
    dispatch(updateModule(module));
  };


  const removeModule = async (moduleId: string) => {
    console.log("removeModule: moduleId =", moduleId);
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  // const createModuleForCourse = async () => {
  //   if (!cid) return;
  //   const newModule = { name: moduleName, course: cid };
  //   const createdModule = await coursesClient.createModuleForCourse(cid, newModule);
  //   dispatch(addModule(createdModule)); // Use the module returned from the server
  //   setModuleName("");
  // };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    console.log("createModuleForCourse: newModule =", newModule);
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    console.log(cid);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, [modules]);


  return (
    <div>
      {(role === "FACULTY"|| role === "ADMIN") && <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={
        // () => {
        // dispatch(addModule({ name: moduleName, course: cid }));
        // setModuleName("");
        createModuleForCourse} />}
      
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <input className="form-control w-50 d-inline-block"
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name} />
                )}
                {(role === "FACULTY"|| role === "ADMIN") &&
                <ModuleControlButtons moduleId={module._id}
                  // deleteModule={(moduleId) => {
                  //   dispatch(deleteModule(moduleId));
                  // }} 
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />}
              </div>

              {module.lessons && module.lessons.length > 0 ? (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ps-2">No lessons available for this module.</p>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}