import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const TableData = ({ data }) => {
  console.log(data);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "country",
      headerName: "Country",
      width: 90,
    },
    { field: "sector", headerName: "Sector", width: 130 },
    { field: "topic", headerName: "Topic", width: 130 },

    {
      field: "intensity",
      headerName: "Intensity",

      width: 90,
    },
    {
      field: "likelihood",
      headerName: "Likelihood",
      width: 90,
    },
    {
      field: "relevance",
      headerName: "Relevance",
      width: 90,
    },
  ];

  const rows = data.map((item, index) => ({
    id: index + 1,
    country: item.country,
    sector: item.sector,
    topic: item.topic,
    intensity: item.intensity,
    likelihood: item.likelihood,
    relevance: item.relevance,
  }));

  return (
    <div style={{ height: 400, width: "100%" }} className="mt-4">
      <div className="flex justify-center items-center font-bold text-3xl p-2">
      <h1>TABLE</h1>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default TableData;
