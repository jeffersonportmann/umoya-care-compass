import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Page } from "@/components/site";

export const Route = createFileRoute("/who")({
  component: WhoLayout,
});

function WhoLayout() {
  const path = useLocation({ select: (l) => l.pathname });
  // The team list ends on a dark band; the individual profiles end on a light one.
  return (
    <Page seam={path === "/who" ? "none" : "light"}>
      <Outlet />
    </Page>
  );
}
