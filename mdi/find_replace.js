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
      _react2.default.createElement('path', { d: 'M11 6c1.4 0 2.6.6 3.5 1.5L12 10h6V4l-2.1 2c-1.2-1.2-3-2-4.9-2-3.5 0-6.4 2.6-6.9 6h2c.5-2.3 2.5-4 4.9-4zm5.6 9.1c.7-.9 1.2-1.9 1.3-3.1h-2c-.5 2.3-2.5 4-4.9 4-1.4 0-2.6-.6-3.5-1.5L10 12H4v6l2-2.1c1.3 1.3 3.1 2.1 5 2.1 1.6 0 3-.5 4.1-1.4l4.9 4.9 1.5-1.5-4.9-4.9z' })
    )
  );
};

exports.default = Icon;