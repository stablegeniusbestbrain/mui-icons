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
      _react2.default.createElement('path', { d: 'M7.6 5.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0zM6 16V7H4v9c0 2.8 2.2 5 5 5h6v-2H9c-1.7 0-3-1.3-3-3zm14 4.1L14.9 15h-3.4v-3.7c1.4 1.2 3.6 2.2 5.5 2.2v-2.2c-1.7 0-3.6-.8-4.7-2l-1.4-1.6c-.2-.2-.4-.3-.7-.5-.3-.1-.6-.2-.9-.2h-.1C8 7 7 8 7 9.2V15c0 1.7 1.3 3 3 3h5.1l3.5 3.5' })
    )
  );
};

exports.default = Icon;