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
      _react2.default.createElement('path', { d: 'M2.8 14.1l2.8-2.8 2.6-.5c3.2-4.4 9.4-6.6 11.6-6.6 0 2.2-2.2 8.4-6.6 11.6l-.5 2.6-2.8 2.8-.7-3.5c-1.4 0-1.4 0-2.2-.8-.7-.7-.7-.7-.7-2.1l-3.5-.7zm2.8 2.8L7 18.4 4.4 21H3v-1.4l2.6-2.7zm-1.4-1.4l1.3.2L3 18.2v-1.5l1.2-1.2zm4.1 3l.2 1.3L7.3 21H5.8l2.5-2.5zm4.7-9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;