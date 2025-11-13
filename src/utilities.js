function getItemsFromLS() {
  const res = localStorage.getItem("installed");
  const data = JSON.parse(res);

  if (data) {
    return data;
  }

  return [];
}

function setItemToLS(id) {
  const current = getItemsFromLS();
  if (current.includes(id) === false) {
    current.push(id);
    const res = JSON.stringify(current);
    localStorage.setItem("installed", res);
  }
}

function removeItemToLS(id) {
  const current = getItemsFromLS();

  const newCurrent = current.filter((c) => c != id);

  const res = JSON.stringify(newCurrent);
  localStorage.setItem("installed", res);
}

export { getItemsFromLS, setItemToLS, removeItemToLS };
