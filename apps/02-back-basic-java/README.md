Back Basic Java
===============

There is no `Dockerfile` inside it. It is due to how the `jar` file are generated.
The name is dynamic because it's contains the version number registered inside your `pom.xml` file.

To handle this, I use a `Makefile` and an action to generate the `Dockerfile` based
on what is present in your `pom.xml` file.

The newly generated `Dockerfile` is based on the `template.dockerfile` file. Just the name and
the version of the `jar` are placeholders.