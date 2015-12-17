# resol

Resolves node module names to an absolute path of that module's entry point.

## Installation

Install via [npm](https://npmjs.com):

```bash
npm install resol
```

## Usage

You can `resol` a module name either via supplying names as arguments:

```bash
resol foo bar baz
```

Or via stdin:

```bash
echo foo bar baz | resol
```

When piping from stdin, `resol` will split lines on whitespace, so multiple module names per line may be present.

If the `<module>` can be found from the current path, its absolute path will be printed to stdout. If not, an error is printed to stderr and the process exits with a non-zero exit code.

---

[License](LICENSE)