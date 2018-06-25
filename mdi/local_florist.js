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
      _react2.default.createElement('path', { d: 'M12 22c5 0 9-4 9-9-5 0-9 4-9 9zM5.6 10.3c0 1.3 1.1 2.5 2.5 2.5.5 0 1-.2 1.4-.5v.2c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-.2c.4.3.9.5 1.4.5 1.4 0 2.5-1.2 2.5-2.5 0-1-.6-1.9-1.4-2.3.8-.4 1.4-1.2 1.4-2.2 0-1.4-1.1-2.5-2.5-2.5-.5 0-1 .1-1.4.4v-.2C14.5 2.1 13.4 1 12 1S9.5 2.1 9.5 3.5v.2c-.4-.3-.9-.4-1.4-.4-1.4 0-2.5 1.1-2.5 2.5 0 1 .6 1.8 1.4 2.2-.8.4-1.4 1.3-1.4 2.3zM12 5.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5S9.5 9.4 9.5 8s1.1-2.5 2.5-2.5zM3 13c0 5 4 9 9 9 0-5-4-9-9-9z' })
    )
  );
};

exports.default = Icon;