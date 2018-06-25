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
      _react2.default.createElement('path', { d: 'M8.1 10.7l5.2 5.2L8.1 21l-9-9 9-9 2.3 2.3-1.3 1.2-1-.9L1.7 12l6.4 6.4 2.6-2.6L6.9 12zM15.9 3l9 9-9 9-2.3-2.2 1.3-1.3 1 .9 6.4-6.4-6.4-6.4-2.6 2.6 3.8 3.8-1.2 1.3-5.2-5.2z' })
    )
  );
};

exports.default = Icon;