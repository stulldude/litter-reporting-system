import axios from 'axios';

const BASE_URL = 'https://kbpkol7wbc.execute-api.us-west-2.amazonaws.com/app_development';

interface LitterReport {
  recordId: number;
  longitude?: number;
  description?: string;
  [key: string]: number | string | undefined; // For flexibility with additional properties
}

export const getLitterReports = async (): Promise<LitterReport[]> => {
  try {
    const response = await axios.get<LitterReport[]>(`${BASE_URL}/litter`);
    return response.data;
  } catch (error) {
    console.error('Error fetching litter reports:', error);
    return [];
  }
};

export const createLitterReport = async (reportData: LitterReport): Promise<LitterReport | null> => {
  try {
    const response = await axios.post<LitterReport>(`${BASE_URL}/litter`, reportData);
    return response.data;
  } catch (error) {
    console.error('Error creating litter report:', error);
    return null;
  }
};

export const getLitterReport = async (reportId: number): Promise<LitterReport | null> => {
  try {
    const response = await axios.get<LitterReport>(`${BASE_URL}/litter/${reportId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching litter report:', error);
    return null;
  }
};

export const updateLitterReport = async (
  reportId: number,
  reportData: LitterReport
): Promise<LitterReport | null> => {
  try {
    const response = await axios.put<LitterReport>(`${BASE_URL}/litter/${reportId}`, reportData);
    return response.data;
  } catch (error) {
    console.error('Error updating litter report:', error);
    return null;
  }
};

export const deleteLitterReport = async (reportId: number): Promise<LitterReport | null> => {
  try {
    const response = await axios.delete<LitterReport>(`${BASE_URL}/litter/${reportId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting litter report:', error);
    return null;
  }
};
