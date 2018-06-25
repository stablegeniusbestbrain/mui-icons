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
      _react2.default.createElement('path', { d: 'M21.4 12.9q0 .7-.5 1.2l-8.7 8.7q-.5.5-1.2.5t-1.2-.5l-1-1q-.5-.5-.5-1.2t.5-1.2l3.9-4H3.3q-.7 0-1.2-.5t-.4-1.2V12q0-.7.4-1.2t1.2-.5h9.4l-3.9-4q-.5-.4-.5-1.2t.5-1.2l1-1q.5-.5 1.2-.5t1.2.5l8.7 8.8q.5.4.5 1.2z' })
    )
  );
};

exports.default = Icon;