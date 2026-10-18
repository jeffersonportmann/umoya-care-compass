import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Page } from "@/components/site";

export const Route = createFileRoute("/who")({
  component: WhoLayout,
});

function WhoLayout() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}
