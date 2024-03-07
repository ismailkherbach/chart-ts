import { IQueryClient, QueryProvider } from "./query";

export type IProps = {
  children?: React.ReactNode;
  queryClient?: IQueryClient;
};

export function ServicesProvider({ children, queryClient }: IProps) {
  return <QueryProvider queryClient={queryClient}>{children}</QueryProvider>;
}
