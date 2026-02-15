// components/providers/client-providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function ClientProviders({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  const isProject = useMemo(() => pathname.startsWith("/projects/"), [pathname]);

  useEffect(() => {
    // Tu fix para el log de Shadcn
    window.console.error = window.console.log;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full overflow-y-hidden mx-auto max-w-display-wide">
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
      </div>
    </QueryClientProvider>
  );
}