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
      _react2.default.createElement('path', { d: 'M12 3c-1.3 0-2.4.8-2.8 2H3v2h1.9L2 14c-.5 2 1 3 3.5 3s4.1-1 3.5-3L6.1 7h3.1c.3.9.9 1.5 1.8 1.8V20H2v2h20v-2h-9V8.8c.9-.3 1.5-.9 1.8-1.8h3.1L15 14c-.5 2 1 3 3.5 3s4.1-1 3.5-3l-2.9-7H21V5h-6.2c-.4-1.2-1.5-2-2.8-2zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-6.5 5.3L7 14H4l1.5-3.7zm13 0L20 14h-3l1.5-3.7z' })
    )
  );
};

exports.default = Icon;