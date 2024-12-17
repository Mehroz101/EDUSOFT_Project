import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const TaxedInvoiceReportFun = async (data) => {
  try {
    console.log(data);
    const sendData = {
      dateFrom: data.dateFrom,
      dateTo: data.dateTo,
      businessUnitID: `${data.businessUnitID}`,
    };
    console.log(sendData);
    const response = await axios.post(
      `${API_URL}/api/Print/TaxInvoiceReport`,
      sendData
    );
    console.log(response);
    if (response.data) {
      return response.data || [];
    }
  } catch (error) {
    console.log(error);
  }
};
