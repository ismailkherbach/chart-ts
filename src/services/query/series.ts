import { useQuery } from "react-query";
import { getSeries } from "../../api/getSeries";

const useGetSeriesQuery = () => {
  return useQuery("useGetSeriesQuery", () => getSeries());
};

export { useGetSeriesQuery };
