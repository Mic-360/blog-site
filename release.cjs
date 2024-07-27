const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define paths
const packageJsonPath = path.join(__dirname, 'package.json');
const configFilePath = path.join(__dirname, './src/lib/config.ts');

// Function to increment the version number
function incrementVersion(version) {
	const versionParts = version.split('.').map(Number);
	versionParts[2]++; // Increment patch version
	if (versionParts[2] >= 10) {
		versionParts[2] = 0;
		versionParts[1]++; // Increment minor version
	}
	if (versionParts[1] >= 10) {
		versionParts[1] = 0;
		versionParts[0]++; // Increment major version
	}
	return versionParts.join('.');
}

// Read and update package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const oldVersion = packageJson.version;
const newVersion = incrementVersion(oldVersion);
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

console.log(`Version updated from ${oldVersion} to ${newVersion}`);

// Update the config file
const configFileContent = fs.readFileSync(configFilePath, 'utf8');
const updatedConfigFileContent = configFileContent.replace(
	/export const version = '.*';/,
	`export const version = '${newVersion}';`
);
fs.writeFileSync(configFilePath, updatedConfigFileContent, 'utf8');

// // Commit and tag the changes
// execSync('git add package.json ./src/lib/config.ts');
// execSync(`git commit -m "Release v${newVersion}"`);
// execSync(`git tag v${newVersion}`);

// // Push changes and tags
// execSync('git push');
// execSync('git push --tags');
