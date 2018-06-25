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
      _react2.default.createElement('path', { d: 'M20.9 11c-.4-4.2-3.7-7.5-7.9-7.9V1h-2v2.1c-4.2.4-7.5 3.7-7.9 7.9H1v2h2.1c.4 4.2 3.7 7.5 7.9 7.9V23h2v-2.1c4.2-.4 7.5-3.7 7.9-7.9H23v-2h-2.1zM12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z' })
    )
  );
};

exports.default = Icon;