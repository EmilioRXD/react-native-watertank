const API_URL = "http://192.168.14.177:3000/example";

export const saveLevel = async (newLevel) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const getLevelId = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const updateLevel = async (levelId, newLevel) => {
  console.log(levelId, newLevel);
  const res = await fetch(`${API_URL}/${levelId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLevel),
  });
  return res;
};
