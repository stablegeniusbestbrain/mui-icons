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
      _react2.default.createElement('path', { d: 'M12 6.5c1.4 0 2.5 1.1 2.5 2.5 0 .7-.3 1.4-.8 1.8l3.6 3.7c1-1.9 1.7-3.8 1.7-5.5 0-3.9-3.1-7-7-7-2 0-3.8.8-5 2.2l3.2 3.1c.4-.5 1.1-.8 1.8-.8zm4.4 9.6l-4.7-4.6-.1-.1L3.3 3 2 4.3l3.2 3.1C5.1 8 5 8.5 5 9c0 5.3 7 13 7 13s1.7-1.9 3.4-4.4l3.3 3.4 1.3-1.3-3.6-3.6z' })
    )
  );
};

exports.default = Icon;