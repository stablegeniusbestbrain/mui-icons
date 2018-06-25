# Mat-UI Icons

[![npm][npm-image]][npm-url]


[npm-url]: https://www.npmjs.com/package/mat-ui-icons

Effortlessly include icons from the most popular icon libraries in you [Material-UI](http://www.material-ui.com/) project.

## Installation

Yes, you guessed it:

    npm i -S mat-ui-icons

This package has `material-ui` as a peer dependency, so remember to also have that in your `node_modules`.

    npm i -S material-ui

## Usage

Simply import the icons you want and add them to [IconButtons](http://www.material-ui.com/#/components/icon-button) or anywhere else.

```javascript
import React from 'react';
import IconButton from ' @material-ui/core/IconButton';

import Heart from 'mui-icons/cmdi/heart';
// import Heart from 'mui-icons/evilicons/heart';
// import Heart from 'mui-icons/fontawesome/heart';
// import Heart from 'mui-icons/ionicons/ios-heart';
// import Heart from 'mui-icons/mdi/favorite';
// import Heart from 'mui-icons/octicons/heart';
// import Heart from 'mui-icons/typicons/heart';

const LoveButton = () => (
  <IconButton>
    <Heart />
  </IconButton>
);

export default LoveButton;
```

If you know what you are doing you may also include all of the icons from a library:

```javascript
// Prefer this
import Ionicons from 'mat-ui-icons/ionicons';
// This works too, but don't use it
import { Ionicons } from 'mat-ui-icons';
```

The first option is preferable, because the second, if a tree-shake is not implemented it would result in a bundle larger than necessary (unless you really are using every single icon from the package).

## Libraries Included

| Name | Folder Name | Home Page | Number if Icons |
|---|---|---|---|
| Community Material Design Icons | `cmdi` | https://materialdesignicons.com/ | 1956 |
| Evil Icons | `evilicons` | http://evil-icons.io/ | 70 |
| FontAwesome | `fontawesome` | http://fontawesome.io/ | 694 |
| Ionicons | `ionicons` | http://ionicons.com/ | 859 |
| Material Design Icons | `mdi` | https://material.io/icons/ | 959 |
| Github Octicons | `octicons` | https://octicons.github.com/ | 176 |
| Typicons | `typicons` | http://www.typicons.com/ | 336 |


## Known Issues

- Ionicons uses style on some icons, which react doesn't seem to like.
- `svgscaler` breaks IonIcons and EvilIcons. Using style to reset scale and position.

## Final Notes

This package is based on the excelent [react-icons](https://github.com/gorangajic/react-icons) package.

### Licence

MIT

* Icons are taken from the other projects so please check each project licences accordingly.
