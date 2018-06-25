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
      _react2.default.createElement('path', { d: 'M7 7.1l1.4 1.4C9.3 7.6 10.6 7 12 7s2.7.6 3.6 1.5L17 7.1C15.7 5.8 13.9 5 12 5s-3.7.8-5 2.1zM12 1C9 1 6.2 2.2 4.3 4.2l1.4 1.4C7.3 4 9.5 3 12 3s4.7 1 6.3 2.6l1.5-1.4C17.8 2.2 15 1 12 1zm2.9 9H9.1c-.6 0-1.1.5-1.1 1.1v9.8c0 .6.5 1.1 1.1 1.1h5.8c.6 0 1.1-.5 1.1-1.1v-9.8c0-.6-.5-1.1-1.1-1.1zm.1 10H9v-8h6v8z' })
    )
  );
};

exports.default = Icon;