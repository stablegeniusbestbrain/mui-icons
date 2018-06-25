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
      _react2.default.createElement('path', { d: 'M23.5 20l-5.7-5.8A8.9 8.9 0 0 0 19.5 9c0-5-4-9-9-9s-9 4-9 9 4 9 9 9c1.9 0 3.7-.6 5.2-1.7l5.7 5.8c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4a1.5 1.5 0 0 0 0-2.2v.1zm-13-4c-3.9 0-7.1-3.1-7.1-7s3.2-7.1 7.1-7.1c3.9 0 7.1 3.2 7.1 7.1 0 3.9-3.2 7-7.1 7z' })
    )
  );
};

exports.default = Icon;