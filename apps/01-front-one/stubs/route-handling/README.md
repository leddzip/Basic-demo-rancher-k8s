Route Handling
=================

This structure allows to use a random content database with realistic routes (so NOT plain crud).


How to use
----------

be sure to have an entry such as:

```json
{
  ...,
  "scripts": {
    ...
    "stub:router-handling": "json-server --watch route-handling/data.js --routes route-handling/routes.json --port 3001 --delay 700",
    ...
  }
  ...
}
```

inside your main `package.json` file.
