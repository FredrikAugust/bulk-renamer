# Bulk renamer for JavaScript

This is a very simple program that takes a javscript program, and renames variables sharing the same name, but not representing the same variables into unique names.

This is a common obfuscation pattern in CTFs, and this is my motivation for creating it.

The idea is based upon [the issue submitted by KOLANICH @ open-source-ideas/open-source-ideas](https://github.com/open-source-ideas/open-source-ideas/issues/149).


## How?

1. First, validate the input with ESPrima.
2. Create a span around every character, and allow the user to click on a character to rename the variable under the cursor, and all references to that variable.
3. Regen the code, and show that.
4. Repeast 2. until satisfied, and click generate new code.