const API_URL = "http://192.168.12.73:3000/example";

export const deleteLevel = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const saveLevel = async (newLevel) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      apikey:API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",      
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const getLevel = async () => {
  const res = await fetch(API_URL,{
    method: "GET",
  });
  return await res.json();
};

export const updateLevel = async (levelId, newLevel) => {
  console.log(levelId, newLevel)
  const res = await fetch(`${API}/${levelId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLevel),
  });
  return res;
};
