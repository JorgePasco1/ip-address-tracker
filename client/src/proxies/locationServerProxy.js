export const getIpData = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_LOCATION_SERVICE_URL}/ipInfo`);
    return response.json();
  } catch (error) {
    console.log('error is', error.message);
  }
}
