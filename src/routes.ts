import { type RouteConfig, route, } from "@react-router/dev/routes";

export default [
  route("/","./layout/layout.tsx",[
    route("task","./components/task/TaskPage.tsx"),
    route("register","./components/form/FormRegister.tsx"),
    route("timer","./components/timer/Timer.tsx"),
  ])
  // * matches all URLs, the ? makes it optional so it will match / as well
] satisfies RouteConfig;
