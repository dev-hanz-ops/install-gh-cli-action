# Install GH CLI action

Selfhosted runners do not come with the GH CLI out of the box. This action is an easy-to-use way to install it.

## Usage

```yaml
- name: Install GH CLI
  uses: dev-hanz-ops/install-gh-cli-action
  with:
    gh-cli-version: 2.14.2 # optional, see action.yml for current default
```
