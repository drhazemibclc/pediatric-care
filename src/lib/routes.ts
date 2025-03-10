type RouteAccessProps = {
  [key: string]: string[];
};

export const routeAccess: RouteAccessProps = {
  '/admin(.*)': ['admin'],
  '/doctor(.*)': ['doctor'],
  '/patient(.*)': ['patient', 'admin', 'doctor', 'nurse'],
  '/patient/registrations': ['patient'],
  '/record/doctors': ['admin'],
  '/record/doctors(.*)': ['admin', 'doctor'],
  '/record/patients': ['admin', 'doctor', 'nurse'],
  '/record/staffs': ['admin', 'doctor'],
  '/record/users': ['admin'],
  '/staff(.*)': ['nurse', 'lab_technician', 'cashier'],
};

// import { createRouteMatcher } from "@clerk/nextjs/server";

// export const routeMatchers = {
//   admin: createRouteMatcher([
//     "/admin(.*)",
//     "/patient(.*)",
//     "/record/users",
//     "/record/doctors(.*)",
//     "/record/patients",
//     "/record/doctors",
//     "/record/staffs",
//     "/record/patients",
//   ]),
//   patient: createRouteMatcher(["/patient(.*)", "/patient/registrations"]),

//   doctor: createRouteMatcher([
//     "/doctor(.*)",
//     "/record/doctors(.*)",
//     "/record/patients",
//     "/patient(.*)",
//     "/record/staffs",
//     "/record/patients",
//   ]),
// };
