export async function loadExperience() { 
  const experience = await fetch(`${process.env.API_URL}/experiences`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  const data = await experience.json();

  return data;
  
}