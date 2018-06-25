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
      _react2.default.createElement('path', { d: 'M4.2 14.1l-.7-.7c-.8-.8-.8-2 0-2.8.8-.8 2.1-.8 2.8 0l2.6 2.6 4.3-4.3-2.6-2.6c-.8-.7-.8-2 0-2.8.8-.8 2-.8 2.8 0l.7.7 5.7 5.7.7.7c.8.8.8 2 0 2.8-.8.8-2.1.8-2.8 0l-2.6-2.6-4.3 4.3 2.6 2.6c.8.7.8 2 0 2.8-.8.8-2 .8-2.8 0l-.7-.7-5.7-5.7zm-1 5.3l1-1-1.4-1.5c-.4-.3-.4-1 0-1.4.4-.4 1-.4 1.4 0l4.3 4.3c.4.4.4 1 0 1.4-.4.4-1.1.4-1.4 0l-1.5-1.4-1 1-1.4-1.4zM19.4 3.2l1.4 1.4-1 1L21.2 7c.4.4.4 1.1 0 1.5-.4.4-1 .4-1.4 0l-4.3-4.3c-.4-.4-.4-1 0-1.4.4-.4 1.1-.4 1.4 0l1.5 1.4 1-1z' })
    )
  );
};

exports.default = Icon;