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
      _react2.default.createElement('path', { d: 'M9 4c1.3 0 2.6.5 3.5 1.5L16 9l5 5-7 7-5.5-5.5-3-3c-2-1.9-2-5.1 0-7C6.4 4.5 7.7 4 9 4m0-2c-1.9 0-3.6.7-5 2-1.3 1.4-2 3.1-2 5s.7 3.6 2 4.9l3 3c.2.2.3.2.4.3l5.2 5.2c.4.4.9.6 1.4.6s1-.2 1.4-.6l7-7c.8-.8.8-2 0-2.8l-5-5L14 4.1C12.6 2.7 10.9 2 9 2zm0 5.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S7.5 9.8 7.5 9 8.2 7.5 9 7.5m0-1C7.6 6.5 6.5 7.6 6.5 9s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5S10.4 6.5 9 6.5z' })
    )
  );
};

exports.default = Icon;