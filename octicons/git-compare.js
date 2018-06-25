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
      _react2.default.createElement('path', { d: 'M9 18H7.5c-.4 0-.7-.2-1-.5-.4-.3-.5-.6-.5-1V7.1a3 3 0 0 0-1.5-5.6A3 3 0 0 0 3 7.1v9.4c0 1.2.5 2.2 1.4 3.1.9.9 1.9 1.4 3.1 1.4H9v3l4.5-4.5L9 15v3zM4.5 2.7c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8zM21 16.9V7.5c0-1.2-.5-2.2-1.4-3.1-.9-.9-1.9-1.4-3.1-1.4H15V0l-4.5 4.5L15 9V6h1.5c.4 0 .7.2 1 .5.4.3.5.6.5 1v9.4a3 3 0 0 0 1.5 5.6 3 3 0 0 0 1.5-5.6zm-1.5 4.4c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z' })
    )
  );
};

exports.default = Icon;