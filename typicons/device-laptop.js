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
      _react2.default.createElement('path', { d: 'M22 16.1V6c0-1.7-1.3-3-3-3H5C3.3 3 2 4.3 2 6v10.1c-1.1.2-2 1.2-2 2.4C0 19.9 1.1 21 2.5 21h19c1.4 0 2.5-1.1 2.5-2.5 0-1.2-.9-2.2-2-2.4zM4 6c0-.5.5-1 1-1h14c.6 0 1 .5 1 1v10h-1V7c0-.5-.4-1-1-1H6c-.5 0-1 .5-1 1v9H4V6zm14 10H6V7h12v9zm3.5 3h-19c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.2.5-.5.5z' })
    )
  );
};

exports.default = Icon;