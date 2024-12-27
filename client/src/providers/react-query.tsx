import { ReactNode } from "@tanstack/react-router";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
  );
}
