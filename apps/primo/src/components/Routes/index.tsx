import { RootRoute, Route, Router } from '@tanstack/router';
import NxWelcome from '../../app/nx-welcome';
import { TanStackRouterDevtools } from './DevTools';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <NxWelcome title="primo" />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}
