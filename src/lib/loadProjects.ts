export async function loadProjectsIndex() {
  const projects = await fetch(
    `${process.env.API_URL}/projects`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  const data = await projects.json();

  return data;
}

export async function loadProjects() {
  const projects = await fetch(
    `${process.env.API_URL}/projects?populate[0]=thumbnail`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  const data = await projects.json();

  return data;
}
