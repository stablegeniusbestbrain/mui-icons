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
      _react2.default.createElement('path', { d: 'M12 20c-.2 0-.4-.1-.6-.2-.2-.1-5.5-3.7-7.1-5.3-1.8-1.9-2.1-3.8-2.1-5.1.1-3 2.5-5.4 5.4-5.4 1.8 0 3.4.9 4.4 2.3C13 4.9 14.6 4 16.4 4c2.9 0 5.4 2.4 5.4 5.4 0 1.3-.3 3.2-2.1 5.1-1.6 1.6-6.9 5.2-7.1 5.3-.2.1-.4.2-.6.2zM7.6 6C5.8 6 4.3 7.5 4.3 9.4c0 1.1.1 2.4 1.4 3.6 1.2 1.3 4.9 3.8 6.3 4.8 1.4-1 5.1-3.5 6.3-4.8 1.3-1.2 1.5-2.5 1.5-3.6 0-1.9-1.6-3.4-3.4-3.4S13 7.5 13 9.4c0 .5-.4 1-1 1s-1-.5-1-1C11 7.5 9.5 6 7.6 6z' })
    )
  );
};

exports.default = Icon;