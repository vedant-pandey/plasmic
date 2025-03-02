import {
  PlasmicDataSourceContextProvider,
  PlasmicDataSourceContextValue,
} from "@plasmicapp/data-sources-context";
import { SSRProvider, useIsSSR as useAriaIsSSR } from "@react-aria/ssr";
import * as React from "react";
import { PlasmicHeadContext } from "./PlasmicHead";
import { PlasmicTranslator, PlasmicTranslatorContext } from "./translation";
export {
  PlasmicDataSourceContextProvider,
  useCurrentUser,
} from "@plasmicapp/data-sources-context";

export interface PlasmicRootContextValue {
  platform?: "nextjs" | "gatsby";
}

const PlasmicRootContext = React.createContext<
  PlasmicRootContextValue | undefined
>(undefined);

export interface PlasmicRootProviderProps
  extends PlasmicDataSourceContextValue {
  platform?: "nextjs" | "gatsby";
  children?: React.ReactNode;
  translator?: PlasmicTranslator;
  Head?: React.ComponentType<any>;
}

export function PlasmicRootProvider(props: PlasmicRootProviderProps) {
  const {
    platform,
    children,
    userAuthToken,
    isUserLoading,
    authRedirectUri,
    user,
  } = props;
  const context = React.useMemo(
    () => ({
      platform,
    }),
    [platform]
  );
  const dataSourceContextValue = React.useMemo(
    () => ({
      userAuthToken,
      user,
      isUserLoading,
      authRedirectUri,
    }),
    [userAuthToken, isUserLoading, user, authRedirectUri]
  );
  return (
    <PlasmicRootContext.Provider value={context}>
      <SSRProvider>
        <PlasmicDataSourceContextProvider value={dataSourceContextValue}>
          <PlasmicTranslatorContext.Provider value={props.translator}>
            <PlasmicHeadContext.Provider value={props.Head}>
              {children}
            </PlasmicHeadContext.Provider>
          </PlasmicTranslatorContext.Provider>
        </PlasmicDataSourceContextProvider>
      </SSRProvider>
    </PlasmicRootContext.Provider>
  );
}

export const useIsSSR = useAriaIsSSR;

export function useHasPlasmicRoot() {
  return !!React.useContext(PlasmicRootContext);
}

let hasWarnedSSR = false;
/**
 * Warns the user if PlasmicRootProvider is not used
 */
export function useEnsureSSRProvider() {
  const hasRoot = useHasPlasmicRoot();
  if (hasRoot || hasWarnedSSR || process.env.NODE_ENV !== "development") {
    return;
  }

  hasWarnedSSR = true;
  console.warn(
    `Plasmic: To ensure your components work correctly with server-side rendering, please use PlasmicRootProvider at the root of your application.  See https://docs.plasmic.app/learn/ssr`
  );
}
