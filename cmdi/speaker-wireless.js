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
      _react2.default.createElement('path', { d: 'M20.1 19.1l-1.4-1.4c1.4-1.5 2.3-3.5 2.3-5.7s-.9-4.2-2.3-5.7l1.4-1.4C21.9 6.7 23 9.2 23 12s-1.1 5.3-2.9 7.1zm-2.9-2.9l-1.4-1.4c.8-.7 1.2-1.7 1.2-2.8 0-1.1-.4-2.1-1.2-2.8l1.4-1.4c1.1 1 1.8 2.5 1.8 4.2 0 1.7-.7 3.2-1.8 4.2zM4 3h8c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm4 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' })
    )
  );
};

exports.default = Icon;