export async function loadProjectsIndex() {
  const projects = await fetch(
    `${process.env.API_URL}/projects?sort=createdAt:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  const jsonData = await projects.json();
  const slicedData = { ...jsonData, data: jsonData.data.slice(0, 2) };
  return slicedData;
}

export async function loadProjects() {
  const projects = await fetch(
    `${process.env.API_URL}/projects?sort=createdAt:desc&populate[0]=thumbnail`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  const data = await projects.json();

  return data;
}
