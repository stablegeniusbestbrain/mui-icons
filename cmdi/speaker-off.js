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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 21 21.7 19.7 23l-1.4-1.5c-.4.3-.8.5-1.3.5H7c-1.1 0-2-.9-2-2V8.3l-3-3zM12 18c-1.7 0-3-1.3-3-3 0-.8.3-1.5.7-2l-1.4-1.4C7.5 12.5 7 13.7 7 15c0 2.8 2.2 5 5 5 1.3 0 2.5-.5 3.4-1.3L14 17.3c-.5.4-1.2.7-2 .7zm5-3c0-2.8-2.2-5-5-5h-.2L5.1 3.3C5.4 2.5 6.1 2 7 2h10c1.1 0 2 .9 2 2v13.2l-2-2V15zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;