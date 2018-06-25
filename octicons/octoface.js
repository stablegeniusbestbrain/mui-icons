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
      _react2.default.createElement('path', { d: 'M22 8c.2-.5.9-2.4-.1-5 0 0-1.6-.5-5.2 2-1.5-.4-3.1-.5-4.7-.5s-3.2.1-4.7.5C3.7 2.5 2.1 3 2.1 3c-1 2.6-.3 4.5-.2 5C.7 9.3 0 11 0 13c0 7.8 5 9.5 12 9.5s12-1.7 12-9.5c0-2-.7-3.7-1.9-5zM12 21c-4.9 0-9-.2-9-5 0-1.1.6-2.2 1.6-3.1 1.6-1.5 4.3-.7 7.4-.7 3.1 0 5.8-.8 7.4.7 1 .9 1.6 2 1.6 3.1 0 4.8-4.1 5-9 5zm-3.8-7.5c-1 0-1.8 1.2-1.8 2.7s.8 2.7 1.8 2.7 1.8-1.2 1.8-2.7-.8-2.7-1.8-2.7zm7.6 0c-1 0-1.8 1.2-1.8 2.7s.8 2.7 1.8 2.7 1.8-1.2 1.8-2.7-.8-2.7-1.8-2.7z' })
    )
  );
};

exports.default = Icon;