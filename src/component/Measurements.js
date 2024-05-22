import React, { useState, useEffect, useCallback } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { CustomerService } from "./service/CustomerService";
const Measurements = () => {
  const [measurementsData, setMeasurementsData] = useState([]);
  const [measurementsData2, setMeasurementsData2] = useState([]);

  //   useEffect(() => {
  //     CustomerService.getCustomersMedium().then((data) => setCustomers(data));
  //   }, []);

  const fetchData = useCallback(async () => {
    try {
      const responseData = await fetch(
        "https://aietproject-e3c42-default-rtdb.firebaseio.com/sensors/distance/measurement.json"
      );

      const data = await responseData.json();
      console.log("data>>", data);
      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          key: key,
          value: data[key].distance,
          timestamp: data[key].timestamp,
        });
      }

      setMeasurementsData(loadedData);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchData2 = useCallback(async () => {
    try {
      const responseData = await fetch(
        "https://aietproject-e3c42-default-rtdb.firebaseio.com/sensors/soil_ec_measurement.json"
      );

      const data = await responseData.json();
      console.log("data2222>>", data);
      const loadedData = [];

      for (const key in data) {

        loadedData.push({
          key: key,
          ec: data[key].ec,
          moisture: data[key].moisture,
          salinity: data[key].salinity,
          temperature: data[key].temperature,
          timestamp: data[key].timestamp,
        });
      }

      setMeasurementsData2(loadedData);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchData2();
  }, [fetchData]);

  return (
    <div className="w-[90%] m-auto py-[10em] flex flex-col items-center justify-center ">
      <h2 className="font-bold text-[2.5em] text-[#F4B102] ">Measurements</h2>

      <div className="card">
        <DataTable
          value={measurementsData}
          paginator
          rows={15}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "70rem" }}
        >
          <Column field="key" header="Name" style={{ width: "25%" }}></Column>
          <Column
            field="value"
            header="Distance in ml"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="timestamp"
            header="Time"
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* <div className="card">
        <DataTable
          value={measurementsData2}
          paginator
          rows={15}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "70rem" }}
        >
          <Column field="key" header="Name" style={{ width: "25%" }}></Column>
          <Column field="ec" header="ec" style={{ width: "25%" }}></Column>
          <Column
            field="moisture"
            header="Moisture"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="salinity"
            header="Salinity"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="temperature"
            header="Temperature"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="timestamp"
            header="Timestamp"
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div> */}
    </div>
  );
};

export default Measurements;
