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
      _react2.default.createElement('path', { d: 'M8 14c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.8.3-1.5.8-2-.5-.5-.8-1.2-.8-2 0-1.7 1.3-3 3-3s3 1.3 3 3c1.3.1 2.7.2 4 .2 1.3 0 2.7-.1 4-.2 0-1.7 1.3-3 3-3s3 1.3 3 3c0 .8-.3 1.5-.8 2 .5.5.8 1.2.8 2 0 1.7-1.3 3-3 3s-3-1.3-3-3c-1.3-.1-2.7-.2-4-.2-1.3 0-2.7.1-4 .2z' })
    )
  );
};

exports.default = Icon;