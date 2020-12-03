import Home from "@/components/HomeComponent";
import Search from "@/components/SearchResultComponent";

export const routes = [
  { path: "", component: Home, name: "Home" },
  { path: "/search", component: Search },
];
