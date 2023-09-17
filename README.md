 # SurrealDB Client & Zod Schema Generator

 SurrealDB Schema Generator is a handy tool that simplifies the process of generating [zod](http://zod.dev) schemas and TypeScript clients for [SurrealDB](http://surrealdb.com) based on your provided database schema.
 Its primary purpose is to offer a fundamental starting point, not to replace a full-blown automated ORM.

 ## Features

 - Generate zod schemas and TypeScript clients for SurrealDB.
 - Utilize your existing database schema created with excellent tools like [surrealist.app](https://surrealist.app/).
 - Benefit from a user-friendly **Designer** in Surrealist to craft your data model effortlessly.
 - Export your schema from Surrealist and use it with this tool.
 - Choose to generate only zod schemas or include a basic TypeScript client.
 - Utilize zod schemas for [CIRQL](https://cirql.starlane.studio/) if needed.

 ## How It Works

 SurrealDB Schema Generator connects to your specified database and extracts the provided `DEFINE` information.
 Additionally, you can provide a SurrealQL file containing conditions.
 Before fetching the `DEFINE` information, the tool queries the SurrealDB instance using the conditions specified in the file.

 **Please Note:**
 The information is not directly extracted from the provided file - it is written to the database in advance.

 Enjoy using SurrealDB Schema Generator to streamline your schema generation process for SurrealDB and zod.
 It's designed to make your life easier when working with these powerful technologies.

## Installation

You can directly execute the generation:

```bash
npx surql-gen
```

Or you can install the generator as depenedency into your project.

```bash
npm i -D @sebastianwessel/surql-gen
```
In case you install the generator as dependency or you installed it globally, you can call directly `surql-gen`


## How to Use

Configuring options for this tool is flexible and convenient. You have two main methods to choose from:

1. **Config JSON File**: You can easily set your options through a simple config JSON file.

2. **Command Line Interface (CLI)**: Alternatively, you can configure the options directly via the command line.

And the best part? You can use both methods simultaneously if it suits your needs. In such cases, the tool intelligently merges the parameters, giving priority to the ones provided through the CLI.
This means you have complete control over your configuration, adapting it to your preferences effortlessly.

```bash
Usage: surql-gen [options]

Generate zod schema and typescript client code from running Surreal database

Options:
  -V, --version                          output the version number
  -f, --file [schemaFile]                a SurrealQL file containing the definitions (default: "myschema.surql")
  -c, --config [configFile]              SurrealDB connection url (default: "surql-gen.json")
  -s, --surreal [surreal]                SurrealDB connection url (default: "ws://127.0.0.1:8000")
  -u, --username [username]              auth username (default: "root")
  -p, --password [password]              auth password (default: "root")
  -n, --ns [ns]                          the namspace (default: "test")
  -d, --db [db]                          the database (default: "test")
  -o, --outputFolder [outputFolder]      output folder (default: "client_generated")
  -g, --generateClient [generateClient]  generate client (default: true)
  -h, --help                             display help for command
```

## Code Generation Structure

The generated code is organized into two distinct parts for your convenience:

### `_generated` Subfolder

In this subfolder, you'll find schema information and other generated code that may be overwritten during subsequent runs of the tool. Here's how it works:

- **Table Definition Overwrite**: If the tool detects a table definition and an existing `_generated` folder, it replaces the old folder with a new one. This ensures that you're always working with the latest generated code.

- **Folder Retention**: If there's a folder for a table that no longer exists in the current run, it won't be automatically deleted. This approach gives you the flexibility to manage your codebase and project structure according to your preferences, allowing you to keep your work organized.

### Other Generated Subfolders

Apart from the `_generated` folder, additional subfolders are created during the initial execution of the tool.
These subfolders are not overwritten or modified in subsequent runs.
They serve as safe spaces for your customizations, changes, and enhancements:

**Customization Freedom**: You can confidently make modifications and enhancements in these subfolders without worrying about them being altered by future executions of the tool.
This design allows you to tailor the generated code to your project's specific requirements, ensuring a seamless development experience.


---

If you like this tool, I please you, to give a star ⭐️ on github:
👉  [https://github.com/sebastianwessel/surrealdb-client-generator](https://github.com/sebastianwessel/surrealdb-client-generator)

If you run into an issue, please let me know so it can get fixed.
👉  [https://github.com/sebastianwessel/surrealdb-client-generator/issues](https://github.com/sebastianwessel/surrealdb-client-generator/issues)

**Good luck with your project. 👋 Cheers, and happy coding!**
