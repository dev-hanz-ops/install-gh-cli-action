import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import * as path from 'path';

async function run() {
  try {
    let version = core.getInput('gh-cli-version');
    let architecture = core.getInput('gh-cli-arch');
    console.log(`Hello ${architecture}!`);
    if (version && architecture) {
      await getGhCli(version,architecture);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function getGhCli(version,architecture) {
  let toolPath = tc.find('gh-cli', version);

  if (!toolPath) {
    toolPath = await downloadGhCli(version,architecture);
  }

  toolPath = path.join(toolPath, 'bin');
  core.addPath(toolPath);
}

async function downloadGhCli(version,architecture) {
  const toolDirectoryName = `gh_${version}_linux_${architecture}`;
  const downloadUrl = `https://github.com/cli/cli/releases/download/v${version}/gh_${version}_linux_${architecture}.tar.gz`;
  console.log(`downloading ${downloadUrl}`);

  try {
    const downloadPath = await tc.downloadTool(downloadUrl);
    const extractedPath = await tc.extractTar(downloadPath);
    let toolRoot = path.join(extractedPath, toolDirectoryName);
    return await tc.cacheDir(toolRoot, 'gh-cli', version);
  } catch (err) {
    throw err;
  }
}
run();
