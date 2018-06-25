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
      _react2.default.createElement('path', { d: 'M12 6c2.4 0 4.7.2 7.3.6.5 1.8.7 3.6.7 5.4 0 1.8-.2 3.6-.7 5.4-2.6.4-4.9.6-7.3.6s-4.7-.2-7.3-.6C4.2 15.6 4 13.8 4 12c0-1.8.2-3.6.7-5.4C7.3 6.2 9.6 6 12 6m0-2c-2.7 0-5.2.2-8 .7l-.9.2-.2.9C2.3 7.8 2 9.9 2 12s.3 4.1.9 6.2l.2.9.9.2c2.8.5 5.3.7 8 .7s5.2-.2 7.9-.7l1-.2.2-.9c.6-2.1.9-4.1.9-6.2s-.3-4.2-.9-6.2l-.2-.9-1-.2C17.2 4.2 14.7 4 12 4z' })
    )
  );
};

exports.default = Icon;