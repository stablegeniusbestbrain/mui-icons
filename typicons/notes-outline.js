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
      _react2.default.createElement('path', { d: 'M18.3 4.4c-.3-.4-.8-.5-1.3-.5h-.2l-9 1.2c-1 .2-1.8 1-1.8 2v6.1c-1.7.6-3 2.1-3 3.8 0 2.2 2 4 4.5 4 1.7 0 3.2-.8 3.9-2.1.8.7 1.9 1.1 3.1 1.1 2.5 0 4.5-1.8 4.5-4V5.9c0-.6-.2-1.2-.7-1.5zM11 16v-4.3l3-.4V13c-1.7.2-3 1.5-3 3zm6 0c0 1.1-1.1 2-2.5 2s-2.5-.9-2.5-2 1.1-2 2.5-2h.5v-3.9l-5 .8V17c0 1.1-1.1 2-2.5 2S5 18.1 5 17s1.1-2 2.5-2H8V7.1l9-1.2V16z' })
    )
  );
};

exports.default = Icon;