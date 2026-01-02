import { useParams } from "@tanstack/react-router";
import { definedRoutes } from "@/consts";

export const usePage = () => {
  const { _splat } = useParams({ strict: false });
  const page = _splat ? definedRoutes[_splat] : "unknown";

  console.log({ page });
  const isChildrens = _splat && _splat.startsWith("children-classes");
  const isAdults = _splat && _splat.startsWith("adult-classes");

  return {
    page,
    route: _splat,
    isChildrens,
    isAdults,
  };
};
