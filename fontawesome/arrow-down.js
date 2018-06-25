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
      _react2.default.createElement('path', { d: 'M22.4 11.1q0 .8-.5 1.2l-8.7 8.8q-.5.5-1.2.5t-1.2-.5l-8.7-8.8q-.5-.4-.5-1.2 0-.7.5-1.2l1-1q.5-.5 1.2-.5t1.2.5l3.9 4V3.4q0-.7.5-1.2t1.2-.5h1.8q.7 0 1.2.5t.5 1.2v9.5l3.9-4q.5-.5 1.2-.5t1.2.5l1 1q.5.5.5 1.2z' })
    )
  );
};

exports.default = Icon;