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
      _react2.default.createElement('path', { d: 'M19 15.1v6.4c0 .8-.7 1.5-1.5 1.5H11c-.4 0-.7-.2-1-.4l-4.9-4.2.7-.8c.2-.2.5-.3.8-.3h.2L10 19V9c0-.6.4-1 1-1s1 .4 1 1V7c0-.6.4-1 1-1s1 .4 1 1v5l4.1 1.8c.6.3.9.8.9 1.3zM13 3c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5V9.2c.6-.5 1-1.3 1-2.2 0-1.7-1.3-3-3-3-1.4 0-2.5.9-2.9 2.1C8.9 6.5 8 7.6 8 9c0 .9.4 1.7 1 2.2v1.3c-1.2-.7-2-2-2-3.5 0-1.6 1-3 2.4-3.6C10 4 11.4 3 13 3zm0-2c3.3 0 6 2.7 6 6 0 2.1-1 3.9-2.6 5l-1.1-.5C16.9 10.6 18 8.9 18 7c0-2.8-2.2-5-5-5-1.9 0-3.5 1.1-4.4 2.6C7.1 5.5 6 7.1 6 9c0 2.1 1.2 3.8 3 4.6v1.1c-2.3-.9-4-3.1-4-5.7 0-2.2 1.2-4.1 2.9-5.1C8.9 2.1 10.8 1 13 1z' })
    )
  );
};

exports.default = Icon;