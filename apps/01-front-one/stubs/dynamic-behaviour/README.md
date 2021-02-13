Dynamic Behaviour
=================

This structure allows to add some realistic behaviour such as conditional response
and unexpected error (5xx, 4xx or whatever you want).

It is build using:
- random data (the seed)
- routes (to remap the basic json routes to more realistically named routes)
- custom dynamic routes (written in js in order to add dynamics)

How to use
----------

be sure to have an entry such as:

```json
{
  ...,
  "scripts": {
    ...
    "stub:dynamic-behaviour": "node dynamic-behaviour/dynamic-behaviour.js"
    ...
  }
  ...
}
```

inside your main `package.json` file.
