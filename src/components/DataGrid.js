import React from 'react';
import DataGrid from 'storybook-material-ui-project/dist/components/DataGrid';

const DataGridComp = () => {
  
  const sampleColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'First Name' },
    { field: 'role', headerName: 'Role' }
];

const sampleRows = [
    { id: 1, firstName: 'Alice', role: 'Developer' },
    { id: 2, firstName: 'Bob', role: 'Designer' },
    { id: 3, firstName: 'Charlie', role: 'Manager' }
];
  return (
    <div>
      <h1>About Storybook Sample Page</h1>
      <p><DataGrid columns={sampleColumns} rows={sampleRows} /></p>
      </div>
  );
};

export default DataGridComp;