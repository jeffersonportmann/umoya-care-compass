import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Page } from "@/components/site";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <Page seam="light">
      <Outlet />
    </Page>
  );
}
