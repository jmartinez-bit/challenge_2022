#!/usr/bin/env node
const { program } = require("commander");
const { saveLink } = require("./controllers/link.controller");


program
  .argument("<url>")
  .requiredOption("--tags <tags...>", "for tags")
  .option("--title <title>", "webpage title")
  .action((url, options, command) => {

    if(url && options.title && options.tags) {
        saveLink(url, options.title, options.tags);
    } else {
        console.error('Error al crear');
    }

  });


program.parse();
