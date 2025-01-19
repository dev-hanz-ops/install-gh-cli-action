# Install GH CLI action

Selfhosted runners do not come with the GH CLI out of the box. This action is an easy-to-use way to install it.

Supports linux on amd64 and arm64 architectures.

## Usage

```yaml
- name: Install GH CLI
  uses: dev-hanz-ops/install-gh-cli-action@v0.2.1
  with:
    gh-cli-version: 2.65.0 # optional, see action.yml for current default
```

## Development

1. Develop feature in the src/ directory.
1. Bundle the source code and dependencies by executing `npm run build`.
