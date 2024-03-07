import axios from "axios";
import { API_BASE_URL } from "../utils/urls";
import { IGetSeriesResponse } from "../common/types/api/getSeries";

const getSeries = async (): Promise<IGetSeriesResponse> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/series`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch data from the API");
  }
};

export { getSeries };
