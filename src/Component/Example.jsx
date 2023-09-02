import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
function Example() {
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
       setIsLoading(true);
       try {
          const response = await fetch('https://seopage1erp.website/api/leads');
          const json = await response.json();
          setData(json);
       } catch (error) {
          console.error(error);
       } finally {
          setIsLoading(false);
       }
    }
    fetchData();
 }, []);
    const columns = useMemo(
        () => [
          {
            accessorKey: 'Name',
            header: 'Name',
          },
          {
            accessorKey: 'Project Link',
            header: 'Project Link',
          },
          //column definitions...
          {
            accessorKey: 'Project id',
            header: 'Project id',
          },
          {
            accessorKey: 'Project Budjet',
            header: 'Project Budjet',
          },
          //end
          {
            accessorKey: 'Bid value',
            header: 'Bid value',
          },
          {
            accessorKey: 'Created',
            header: 'Created',
          },
          {
            accessorKey: 'Created By',
            header: 'Created By',
          },
          {
            accessorKey: 'Bidding Delay Time',
            header: 'Bidding Delay Time',
          },
          {
            accessorKey: 'Staus',
            header: 'Staus',
          },
        ],
        [],
      );
      if (isLoading) {
        return <div style={{ color: 'black' }}>Loading...</div>;
      }
      if (data) {
        const maindata = data.data.slice(0,10);
        // console.log(maindata);
        
    return (
        <MaterialReactTable columns = {columns}  maindata = {maindata} />
    )
}
}
export default Example;