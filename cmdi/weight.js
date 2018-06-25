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
      _react2.default.createElement('path', { d: 'M12 3c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2H18c1 0 1.8.7 1.9 1.6 2.1 8 2.1 8.2 2.1 8.4 0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2 0-.2 0-.4 2-8.4C4.3 9.7 5 9 6 9h2.5C8.2 8.4 8 7.7 8 7c0-2.2 1.8-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;