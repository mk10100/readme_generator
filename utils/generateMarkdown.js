// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = [
    "[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)",
    "[![License: GPL](https://img.shields.io/badge/License-GPL-brightgreen.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)",
    "[![License: MPL](https://img.shields.io/badge/License-MPL-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)",
    "[![License: CC-BY-4.0](https://img.shields.io/badge/License-CC%20BY%204.0-brightgreen.svg)](https://creativecommons.org/licenses/by/4.0/)",
  ];

  return licenseBadges[license] || "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = [
    "https://opensource.org/licenses/MIT",
    "https://www.gnu.org/licenses/gpl-3.0",
    "https://www.apache.org/licenses/LICENSE-2.0",
    "https://www.mozilla.org/en-US/MPL/2.0/",
    "https://creativecommons.org/licenses/by/4.0/",
  ];

  return licenseLinks[license] || "";
}
// 2. TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseInt = parseInt(license);

  const licenseIsValid =
    Number.isInteger(licenseInt) && license >= 1 && license <= 5;

  if (licenseIsValid) {
    const licenseNum = licenseInt - 1;
    const licenses = [
      "MIT License",
      "General Public License (GPL)",
      "Apache License 2.0",
      "Mozilla Public License",
      "Creative Commons Licenses",
    ];
    return [
      renderLicenseBadge(licenseNum),
      `
This project is licensed under the [${
        licenses[licenseNum]
      }](${renderLicenseLink(licenseNum)}).`,
    ];
  }
  return "";
}

// 1. TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `
${licenseSection[0]}

# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseSection[1]}

## Questions
[${data.github}](https://github.com/${data.github})
Please reach out to this email: ${data.email}
`;
}

module.exports = generateMarkdown;
