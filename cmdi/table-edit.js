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
      _react2.default.createElement('path', { d: 'M21.7 13.3l-1 1.1-2.1-2.1 1-1c.3-.2.6-.2.8 0l1.3 1.3c.2.2.2.5 0 .8zM12 18.9l6.1-6 2 2-6 6.1H12v-2.1zM4 2h14c1.1 0 2 .9 2 2v4.2L16.2 12H12v4.2L10.2 18H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 4v4h6V6H4zm8 0v4h6V6h-6zm-8 6v4h6v-4H4z' })
    )
  );
};

exports.default = Icon;