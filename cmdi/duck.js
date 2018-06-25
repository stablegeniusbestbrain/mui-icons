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
      _react2.default.createElement('path', { d: 'M8.5 5C7.7 5 7 5.7 7 6.5S7.7 8 8.5 8 10 7.3 10 6.5 9.3 5 8.5 5zM10 2c2.8 0 5 2.2 5 5 0 1.7-.8 3.2-2.1 4.1 1.5.1 3.3.5 5.1 1.4 3 1.5 4-.5 4-.5s-1 9-7 9H9s-5 0-5-5c0-3 3-4 2-6-4 0-4-3.5-4-3.5 1 .5 2.2.5 3 .2C5.2 4 7.4 2 10 2z' })
    )
  );
};

exports.default = Icon;