// export default function Modules() {
//     return (
//       <div>
//         {/* Implement Collapse All button, View Progress button, etc. */}
//         <button>Collapse All</button>
//         <button>View Progress</button>
//         <select>
//           <option value="published">Published</option>
//           <option value="unpublished">Unpublished</option>
//         </select>
//         <button>+Module</button>
//         <ul id="wd-modules">
//           <li className="wd-module">
//             <div className="wd-title">Week 1</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to the course</li>
//                   <li className="wd-content-item">Learn what is Web Development</li>
//                 </ul>
//                 <span className="wd-title">READING</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
//                   <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
//                 </ul>
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to Web Development</li>
//                   <li className="wd-content-item">Creating User Interfaces</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="wd-module">
//             <div className="wd-title">Week 2</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
//                   <li className="wd-content-item">Deploy the assignment to Netlify</li>
//                 </ul>
//                 <span className="wd-title">READING</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Full Stack Developer - Chapter 3 - HTML</li>
//                   <li className="wd-content-item">Full Stack Developer - Chapter 4 - CSS</li>
//                 </ul>
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Creating User Interfaces with HTML</li>
//                   <li className="wd-content-item">Styling User Interfaces with CSS</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//   );}
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import { LiaLandmarkSolid } from "react-icons/lia";
// import ModuleControlButtons from "./ModuleControlButtons";
// export default function Modules() {
//   return (
//     <div>
//       <ModulesControls /><br /><br /><br /><br />
//       <ul id="wd-modules" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             Week 1 <ModuleControlButtons /></div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES
//               <LessonControlButtons /></li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               Introduction to the course <LessonControlButtons />
//             </li>

//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               Learn what is Web Development
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2
//               <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             Week 2 <ModuleControlButtons /></div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1
//               <LessonControlButtons />

//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2
//               <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//       </ul> </div>
//   );
// }

import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules || []; 
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid) 
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
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