const fetchData = async () => {
  const response = await fetch(
    "https://backend-data-dashboard-9frt.onrender.com/api"
  );
  const data = await response.json();
  return data;
};
export default fetchData;
