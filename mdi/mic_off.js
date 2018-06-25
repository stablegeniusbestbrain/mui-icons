'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M19 11h-1.7c0 .7-.2 1.4-.4 2.1l1.2 1.2c.6-1 .9-2.1.9-3.3zm-4 .2V5c0-1.7-1.3-3-3-3S9 3.3 9 5v.2l6 6zM4.3 3L3 4.3l6 6v.7c0 1.7 1.3 3 3 3 .2 0 .4 0 .7-.1l1.6 1.7c-.7.3-1.5.5-2.3.5-2.8 0-5.3-2.1-5.3-5.1H5c0 3.4 2.7 6.2 6 6.7V21h2v-3.3c.9-.1 1.8-.4 2.5-.9l4.2 4.2 1.3-1.3L4.3 3z' })
    )
  );
};

exports.default = Icon;