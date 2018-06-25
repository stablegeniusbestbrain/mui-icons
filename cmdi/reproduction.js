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
      _react2.default.createElement('path', { d: 'M12.7 13.2l.9-.9c0-1.3.7-2.9 2-4.2 2-1.9 4.5-2.6 5.7-1.4 1.1 1.2.5 3.7-1.4 5.7-1.3 1.3-2.9 2-4.2 2l-.9.9c-.3.3-.8.4-1.2.1-.8.3-1.6.7-2 1.4-.6.9-.6 2.3-1.1 3.1s-1.7 1.2-2.9 1.2S5 21 4 19.5l2.4.4c.6.1 2.1-.5 2.7-1.4.5-.8.5-2.2 1-3.1.5-.8 1.4-1.2 2.3-1.5 0-.3.1-.5.3-.7zM7 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2C5.3 4 4 5.3 4 7s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;