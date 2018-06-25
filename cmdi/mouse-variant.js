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
      _react2.default.createElement('path', { d: 'M14 7h-4V2.1c2.3.5 4 2.5 4 4.9zM4 7c0-2.4 1.7-4.4 4-4.9V7H4zm10 5c0 2.4-1.7 4.4-4 4.9V18c0 1.7 1.3 3 3 3s3-1.3 3-3v-5c0-2.2 1.8-4 4-4h2l-1 1 1 1h-2c-1.1 0-2 .9-2 2v5c0 2.8-2.2 5-5 5s-5-2.2-5-5v-1.1c-2.3-.5-4-2.5-4-4.9V9h10v3z' })
    )
  );
};

exports.default = Icon;