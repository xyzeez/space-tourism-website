export const getAppData = async (dataType) => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data[dataType];
};
