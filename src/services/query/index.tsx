import { QueryClient, QueryClientProvider } from "react-query";

export type IQueryClient = QueryClient;

export const setupQueryClient = (): IQueryClient => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return queryClient;
};

const defaultQueryClient = setupQueryClient();

export type IProps = {
  children?: React.ReactNode;
  queryClient?: IQueryClient;
};

export const QueryProvider = ({
  children,
  queryClient = defaultQueryClient,
}: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
