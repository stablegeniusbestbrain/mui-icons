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
      _react2.default.createElement('path', { d: 'M17.1 14.6q0 .3-.2.6t-.6.2H7.7q-.3 0-.6-.2t-.2-.6.2-.6.6-.3h8.6q.3 0 .6.3t.2.6zm-6.8-6q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zm6.8 0q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zm3.5 3.4q0-1.7-.7-3.3t-1.8-2.8-2.8-1.8-3.3-.7-3.3.7-2.8 1.8-1.8 2.8-.7 3.3.7 3.3 1.8 2.8 2.8 1.8 3.3.7 3.3-.7 2.8-1.8 1.8-2.8.7-3.3zm1.7 0q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;