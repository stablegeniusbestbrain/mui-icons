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
      _react2.default.createElement('path', { d: 'M15 19c-1.3 0-2.7-.5-3.7-1.5-1.3-1.3-3.3-1.3-4.6 0-.4.4-1 .4-1.4 0s-.4-1.1 0-1.4c2-2.1 5.4-2.1 7.4 0 1.3 1.2 3.3 1.2 4.6 0 .4-.4 1-.4 1.4 0s.4 1 0 1.4c-1 1-2.4 1.5-3.7 1.5zm0-4c-1.3 0-2.7-.5-3.7-1.5-1.3-1.3-3.3-1.3-4.6 0-.4.4-1 .4-1.4 0s-.4-1.1 0-1.4c2-2.1 5.4-2.1 7.4 0 1.3 1.2 3.3 1.2 4.6 0 .4-.4 1-.4 1.4 0s.4 1 0 1.4c-1 1-2.4 1.5-3.7 1.5zm0-4c-1.3 0-2.7-.5-3.7-1.5C10 8.2 8 8.2 6.7 9.5c-.4.4-1 .4-1.4 0s-.4-1.1 0-1.4c2-2.1 5.4-2.1 7.4 0 1.3 1.2 3.3 1.2 4.6 0 .4-.4 1-.4 1.4 0s.4 1 0 1.4c-1 1-2.4 1.5-3.7 1.5z' })
    )
  );
};

exports.default = Icon;