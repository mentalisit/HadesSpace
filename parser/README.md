# HadesSpace parser
Parse raw game data

### Project Structure

```text
parser
├─── dist - Parsed data
├─── modules - Main modules of the program
├─── raw - Game raw data
└─── runners - Scripts that finely control the generation of parsing for some files
```

### Run
- `npm install`
- `npm start`

### Arguments
Takes paths to raw files and dirs as arguments

#### Flags
| Name            |        Description         | Default |
|-----------------|:--------------------------:|--------:|
| `--no-wipe`     | Do not wipe the output dir |         |
| `--type <type>` | Output file type           |      js |
|`--ts-types`     | Create TypeScript types    |         |
