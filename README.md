# Install GH CLI action

Selfhosted runners do not come with the GH CLI out of the box. This action is an easy-to-use way to install it.

Supports arm64, amd64 and 386 architectures

## Usage

```yaml
- name: Install GH CLI
  uses: dev-hanz-ops/install-gh-cli-action@v0.2.0
  with:
    gh-cli-version: 2.32.0 # optional, see action.yml for current default
    gh-cli-architcture: amd64 # optional, see action.yml for current default
```
