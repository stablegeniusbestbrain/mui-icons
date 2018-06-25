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
      _react2.default.createElement('path', { d: 'M3.5 3H5V1.8c0-.4.4-.8.8-.8h4.4c.4 0 .8.4.8.8V3h1.5c.8 0 1.5.7 1.5 1.5V5h8v15h-8v.5c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5v-16C2 3.7 2.7 3 3.5 3zM18 7v2h2V7h-2zm-4 0v2h2V7h-2zm-4 0v2h2V7h-2zm4 9v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 0v2h2v-2h-2z' })
    )
  );
};

exports.default = Icon;