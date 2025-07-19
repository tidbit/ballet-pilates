import { Link, LinkProps } from "@tanstack/react-router";

type SplatLinkProps = Omit<LinkProps, "to"> & {
  to: string;
  className?: string;
};
export function SplatLink({ to, ...props }: SplatLinkProps) {
  return <Link to="/$" params={{ _splat: to }} {...props} />;
}
