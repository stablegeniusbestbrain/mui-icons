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
      _react2.default.createElement('path', { d: 'M6.5 2c2 0 3.6 1.3 4.2 3H22v3h-4v3h-3V8h-4.3c-.6 1.7-2.2 3-4.2 3C4 11 2 9 2 6.5S4 2 6.5 2zm0 3C5.7 5 5 5.7 5 6.5S5.7 8 6.5 8 8 7.3 8 6.5 7.3 5 6.5 5zm0 8c2 0 3.6 1.3 4.2 3H22v3h-2v3h-2v-3h-2v3h-3v-3h-2.3c-.6 1.7-2.2 3-4.2 3C4 22 2 20 2 17.5S4 13 6.5 13zm0 3c-.8 0-1.5.7-1.5 1.5S5.7 19 6.5 19 8 18.3 8 17.5 7.3 16 6.5 16z' })
    )
  );
};

exports.default = Icon;