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
      _react2.default.createElement('path', { d: 'M1.5 2.1c.9.9 2.4 1.6 4.2 2.1C7.4 2.8 9.6 2 12 2s4.6.8 6.3 2.2c1.8-.5 3.3-1.2 4.2-2.1 0 1.6-.9 3.1-2.2 4.3C21.4 8 22 9.9 22 12c0 5.5-4.5 10-10 10S2 17.5 2 12c0-2.1.6-4 1.7-5.6-1.3-1.2-2.2-2.7-2.2-4.3zM20 12c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zm-9.5-2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V8.5l3 1.5zm6 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5l3-1.5V10zM12 17.2c-1.8 0-3.3-.7-4.2-1.8L9.2 14c.5.7 1.6 1.2 2.8 1.2s2.3-.5 2.8-1.2l1.4 1.4c-.9 1.1-2.4 1.8-4.2 1.8z' })
    )
  );
};

exports.default = Icon;