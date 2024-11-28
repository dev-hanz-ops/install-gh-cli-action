# Install GH CLI action

Selfhosted runners do not come with the GH CLI out of the box. This action is an easy-to-use way to install it.

Supports linux on amd64, arm and arm64 architectures.

## Usage

```yaml
- name: Install GH CLI
  uses: dev-hanz-ops/install-gh-cli-action@v0.2.0
  with:
    gh-cli-version: 2.32.0 # optional, see action.yml for current default
```
