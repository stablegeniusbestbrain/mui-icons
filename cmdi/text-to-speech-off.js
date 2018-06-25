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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-5.3-5.3c-.9 1.6-2.5 2.9-4.4 3.2V22H7v-2.1C4.2 19.4 2 17 2 14h2c0 2.2 1.8 4 4 4 1.8 0 3.4-1.2 3.8-2.9L10 13.3v.7c0 1.1-.9 2-2 2s-2-.9-2-2V9.3l-4-4zm19.4 4.1l-4.2 4.3 1-3.7H14c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v4c0 .6-.2 1.1-.6 1.4z' })
    )
  );
};

exports.default = Icon;