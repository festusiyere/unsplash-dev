import Home from "@/views/HomeComponent";
import Search from "@/views/SearchResultComponent";

export const routes = [
  { path: "", component: Home, name: "Home" },
  { path: "/search", component: Search },
];
