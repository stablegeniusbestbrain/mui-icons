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
      _react2.default.createElement('path', { d: 'M10.3 11.9l7.3 7.3q-1.4 1.5-3.3 2.3t-4 .8q-2.8 0-5.2-1.4t-3.7-3.7T0 12t1.4-5.2 3.7-3.7 5.2-1.4v10.2zm2.5.1h10.3q0 2.1-.8 4t-2.2 3.3zm9.5-1.7H12V0q2.8 0 5.2 1.4t3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;