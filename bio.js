const fs = require('fs');
const path = require('path');

// Read JSON data from a file
const jsonFilePath = path.join(__dirname, 'resume.json');

fs.readFile(jsonFilePath, 'utf8', (err, jsonString) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    displayData(data);
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});

function displayData(data) {
  console.log(`Name: ${data.name}`);
  console.log(`Title: ${data.title}`);

  console.log("\nContact Information:");
  for (const [key, value] of Object.entries(data.contact)) {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
  }

  console.log("\nEducation:");
  data.education.forEach((edu) => {
    for (const [key, value] of Object.entries(edu)) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
    }
    console.log(); // For spacing between entries
  });

  console.log("\nExperience:");
  data.experience.forEach((exp) => {
    for (const [key, value] of Object.entries(exp)) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
    }
    console.log(); // For spacing between entries
  });

  console.log("\nSkills:");
  data.skills.forEach((skill) => {
    console.log(skill);
  });

  console.log("\nCertifications:");
  data.certifications.forEach((cert) => {
    for (const [key, value] of Object.entries(cert)) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
    }
    console.log(); // For spacing between entries
  });

  console.log("\nProjects:");
  data.projects.forEach((project) => {
    for (const [key, value] of Object.entries(project)) {
      if (Array.isArray(value)) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value.join(', ')}`);
      } else {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
      }
    }
    console.log(); // For spacing between entries
  });
}
