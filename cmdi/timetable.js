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
      _react2.default.createElement('path', { d: 'M14 12h1.5v2.8l2.4 1.4-.7 1.3-3.2-1.8V12zM4 2h14c1.1 0 2 .9 2 2v6.1c1.2 1.3 2 3 2 4.9 0 3.9-3.1 7-7 7-1.9 0-3.6-.8-4.9-2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 13v3h4.7c-.5-.9-.7-1.9-.7-3H4zm0-7h6V5H4v3zm14 0V5h-6v3h6zM4 13h4.3c.3-1.2 1-2.2 1.8-3H4v3zm11-2.8c-2.7 0-4.8 2.1-4.8 4.8 0 2.7 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8-2.1-4.8-4.8-4.8z' })
    )
  );
};

exports.default = Icon;