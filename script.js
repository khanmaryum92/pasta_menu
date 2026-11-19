async function getdata() {
  const response = await fetch(
    "https://api.airtable.com/v0/appVW7HtnNJIeeetH/Meal%20Name",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer patPugm9suzVo3WRl.ca2a59d132eae22f5f1920303efc33c5e27ff7551db980153297026ee967185b",
      },
    },
  );

  const data = await response.json();
  console.log(response);
  console.log(data);

  const container = document.getElementById("pastaType");

  data.records.forEach((pastaType) => {
    container.innerHTML += `
  ${pastaType.fields.Name}, 
  ${pastaType.fields.Specific_Noodle}`;
  });
}
getdata();
