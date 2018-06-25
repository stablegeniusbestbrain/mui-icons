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
      _react2.default.createElement('path', { d: 'M20.9 11c-.4-4.2-3.7-7.5-7.9-7.9V1h-2v2.1c-1.1.1-2.2.4-3.2.9l1.5 1.5c.9-.3 1.8-.5 2.7-.5 3.9 0 7 3.1 7 7 0 .9-.2 1.8-.5 2.7l1.5 1.4c.5-.9.8-2 .9-3.1H23v-2h-2.1zM3 4.3l2 2C4 7.6 3.3 9.2 3.1 11H1v2h2.1c.4 4.2 3.7 7.5 7.9 7.9V23h2v-2.1c1.8-.2 3.4-.9 4.7-1.9l2 2 1.3-1.3L4.3 3 3 4.3zm13.3 13.2c-1.2.9-2.7 1.5-4.3 1.5-3.9 0-7-3.1-7-7 0-1.6.5-3.1 1.5-4.3l9.8 9.8z' })
    )
  );
};

exports.default = Icon;