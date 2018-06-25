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
      _react2.default.createElement('path', { d: 'M21 5c-1.1-.3-2.3-.5-3.5-.5-1.9 0-4.1.4-5.5 1.5-1.4-1.1-3.6-1.5-5.5-1.5-2 0-4 .4-5.5 1.5v14.6c0 .3.3.5.5.5h.3C3.1 20.4 5 20 6.5 20c1.9 0 4.1.4 5.5 1.5 1.3-.9 3.8-1.5 5.5-1.5 1.6 0 3.4.3 4.8 1.1h.2c.3 0 .5-.2.5-.5V6c-.6-.5-1.2-.7-2-1zm0 13.5c-1.1-.4-2.3-.5-3.5-.5-1.7 0-4.2.6-5.5 1.5V8c1.3-.8 3.8-1.5 5.5-1.5 1.2 0 2.4.2 3.5.5v11.5z' })
    )
  );
};

exports.default = Icon;