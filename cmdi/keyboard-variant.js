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
      _react2.default.createElement('path', { d: 'M6 16h12v2H6v-2zm0-3v2H2v-2h4zm1 2v-2h3v2H7zm4 0v-2h2v2h-2zm3 0v-2h3v2h-3zm4 0v-2h4v2h-4zM2 10h3v2H2v-2zm17 2v-2h3v2h-3zm-1 0h-2v-2h2v2zM8 12H6v-2h2v2zm4 0H9v-2h3v2zm3 0h-2v-2h2v2zM2 9V7h2v2H2zm3 0V7h2v2H5zm3 0V7h2v2H8zm3 0V7h2v2h-2zm3 0V7h2v2h-2zm3 0V7h5v2h-5z' })
    )
  );
};

exports.default = Icon;