#!/usr/bin/env node

/**
 * check-dependencies
 * helps to check dependencies of node projects
 *
 * @author nurjs <https://github.com/nurjs/check-dependencies>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const { exec } = require('child_process');
const fs = require('fs');
const ncu = require('npm-check-updates');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	input.includes(`version`) && cli.showVersion();
	if (flags.path) {
		checkUpdates(flags.path);
	}
	debug && log(flags);
})();

function checkUpdates(path) {
	fs.readdir(path, (err, files) => {
		files.forEach(async file => {
			if (file === 'package.json') {
				console.log(`${path + 'package.json'}`);
				const check = await ncu.run({
					packageFile: `${path}package.json`
				});
				if (check !== {} && flags.upgrade) {
					const upgraded = await ncu.run({
						packageFile: `${path}package.json`,
						upgrade: true
					});
					exec(`cd ${path} && npm install`);
					console.log(upgraded);
				} else {
					console.log(check);
				}
			}
		});
	});
}
