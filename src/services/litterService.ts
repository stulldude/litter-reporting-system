import axios from 'axios';
import LitterReport from '../types/LitterReport';
import CallResponse from '../types/CallResponse';

const BASE_URL = 'https://kbpkol7wbc.execute-api.us-west-2.amazonaws.com/app_development';


export const getLitterReports = async (auth): Promise<LitterReport[]> => {
  try {
    const response = await axios.get<LitterReport[]>(`${BASE_URL}/litter`, 
      {
        headers: {
          'Authorization': `Bearer ${auth.user?.id_token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching litter reports:', error);
    return [];
  }
};

export const createLitterReport = async (reportData: LitterReport, auth): Promise<CallResponse | null> => {
  try {
    const response = await axios.put<LitterReport>(`${BASE_URL}/litter`, reportData,
      {
        headers: {
          'Authorization': `Bearer ${auth.user?.id_token}`,
        },
      });
    return response;
  } catch (error) {
    console.error('Error creating litter report:', error);
    return null;
  }
};

export const getLitterReport = async (reportId: number, auth): Promise<LitterReport | null> => {
  try {
    const response = await axios.get<LitterReport>(`${BASE_URL}/litter/${reportId}`, 
      {
        headers: {
          'Authorization': `Bearer ${auth.user?.id_token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching litter report:', error);
    return null;
  }
};

export const updateLitterReport = async (
  reportId: number,
  reportData: LitterReport,
  auth
): Promise<LitterReport | null> => {
  try {
    const response = await axios.put<LitterReport>(`${BASE_URL}/litter/${reportId}`, reportData, 
      {
        headers: {
          'Authorization': `Bearer ${auth.user?.id_token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating litter report:', error);
    return null;
  }
};

export const deleteLitterReport = async (reportId: number, auth): Promise<LitterReport | null> => {
  try {
    const response = await axios.delete<LitterReport>(`${BASE_URL}/litter/${reportId}`, 
      {
        headers: {
          'Authorization': `Bearer ${auth.user?.id_token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting litter report:', error);
    return null;
  }
};
