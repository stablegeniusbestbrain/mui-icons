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
      _react2.default.createElement('path', { d: 'M9 2c3.9 0 7 3.1 7 7 0 1.6-.5 3-1.4 4.2l.8.8h.6l6 6-2 2-6-6v-.6l-.8-.8C12 15.5 10.6 16 9 16c-3.9 0-7-3.1-7-7s3.1-7 7-7zM5 8v2h8V8H5z' })
    )
  );
};

exports.default = Icon;