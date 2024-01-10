import './App.css';
import DataTable from './components/DataTableContainer';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Sidebar from './components/Sidebar';
import DataCard from './components/overview/DataCard';

function App() {
  return (
    <div className='flex w-full'>

      {/* Sidebar component */}
      <div>
        <Sidebar />
      </div>

      {/* Main content container */}
      <div className='w-full bg-primary-200'>

        {/* Navbar component */}
        <Navbar />

        {/* Overview component */}
        <Overview />

        {/* Data cards section */}
        <div className='flex px-4 py-2 gap-4 md:gap-20'>

          {/* DataCard component for Online Orders */}
          <DataCard name={"Online orders"} value={"231"} />

          {/* DataCard component for Amount Received */}
          <DataCard name={"Amount received"} value={"₹23,92,312.19"} />
        </div>

        {/* DataTable component */}
        <DataTable />
      </div>
    </div>
  );
}

export default App;