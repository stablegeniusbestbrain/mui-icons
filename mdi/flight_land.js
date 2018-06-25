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
      _react2.default.createElement('path', { d: 'M2.5 19h19v2h-19zm7.2-5.7l4.3 1.1 5.3 1.4c.8.3 1.7-.2 1.9-1 .2-.8-.3-1.6-1.1-1.9l-5.3-1.4-2.7-9-2-.5v8.3L5.2 8.9l-1-2.3-1.4-.4v5.2l1.6.4 5.3 1.5z' })
    )
  );
};

exports.default = Icon;