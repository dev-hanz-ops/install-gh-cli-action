import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import * as path from 'path';

async function run() {
  try {
    let version = core.getInput('gh-cli-version');
    if (version) {
      await getGhCli(version);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function getGhCli(version) {
  let toolPath = tc.find('gh-cli', version);

  if (!toolPath) {
    toolPath = await downloadGhCli(version);
  }

  toolPath = path.join(toolPath, 'bin');
  core.addPath(toolPath);
}

async function downloadGhCli(version) {
  let arch = 'amd64'; // Default to amd64 architecture
  if (process.arch === 'arm64') {
    arch = 'arm64'; // Change architecture to arm64 if running on arm64
  }

  const toolDirectoryName = `gh_${version}_linux_${arch}`;
  const downloadUrl = `https://github.com/cli/cli/releases/download/v${version}/gh_${version}_linux_${arch}.tar.gz`;
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
