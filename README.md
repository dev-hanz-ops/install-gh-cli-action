# Install GH CLI action

Selfhosted runners do not come with the GH CLI out of the box. This action is an easy-to-use way to install it.

## Usage

```yaml
- name: Install GH CLI
  uses: arimal199-org/install-gh-cli-action
  with:
    gh-cli-version: 2.36.0 # optional, see action.yml for current default
```
