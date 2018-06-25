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
      _react2.default.createElement('path', { d: 'M12 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8-9h-3V8.9c1.7-.5 3-2 3-3.9h-3V4c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1v1H4c0 1.9 1.3 3.4 3 3.9V10H4c0 1.9 1.3 3.4 3 3.9V15H4c0 1.9 1.3 3.4 3 3.9V20c0 .5.4 1 1 1h8c.6 0 1-.5 1-1v-1.1c1.7-.5 3-2 3-3.9h-3v-1.1c1.7-.5 3-2 3-3.9z' })
    )
  );
};

exports.default = Icon;