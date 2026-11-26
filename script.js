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

  const las = document.getElementById("pastaType");
  las.textContent =
    "Choose your pasta shape: " +
    data.records[0].fields.specificNoodle[0] +
    ", " +
    data.records[0].fields.specificNoodle[1];

  const spag = document.getElementById("spagType");
  spag.textContent =
    "Choose your pasta shape: " +
    data.records[3].fields.specificNoodle[0] +
    ", " +
    data.records[3].fields.specificNoodle[1];

  const mac = document.getElementById("macType");
  mac.textContent =
    "Choose your pasta shape: " +
    data.records[2].fields.specificNoodle[0] +
    ", " +
    data.records[2].fields.specificNoodle[1] +
    ", " +
    data.records[2].fields.specificNoodle[2];

  const pas = document.getElementById("pasType");
  pas.textContent =
    "Choose your pasta shape: " +
    data.records[1].fields.specificNoodle[0] +
    ", " +
    data.records[1].fields.specificNoodle[1] +
    ", " +
    data.records[1].fields.specificNoodle[2] +
    ", " +
    data.records[1].fields.specificNoodle[3];

  const spic = document.getElementById("spicType");
  spic.textContent =
    "Choose your pasta shape: " + data.records[4].fields.specificNoodle[0];
  //   data.records.forEach((pastaType) => {
  //     console.log(pastaType);
  //     //   container.innerHTML = `
  //     // ${pastaType.fields.Name},
  //     // ${pastaType.fields.specificNoodle}`;
  //   });
}
getdata();
