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
      _react2.default.createElement('path', { d: 'M11.4 22.5c1.8 0 3.8-.5 5.3-1.4l-.6-1.4c-1.3.8-2.9 1.2-4.6 1.2-4.8 0-8.4-3.1-8.4-8.6 0-6.5 4.8-10.7 9.8-10.7 5.2 0 7.9 3.3 7.9 7.8 0 3.6-2 5.8-3.8 5.8-1.5 0-2-1.1-1.5-3.3l1-5.6H15l-.2 1c-.6-.9-1.4-1.2-2.3-1.2C9.2 6.1 7 9.7 7 12.7c0 2.5 1.4 3.9 3.4 3.9 1.3 0 2.5-.8 3.5-1.9.1 1.4 1.4 2.2 2.9 2.2 2.5 0 5.7-2.5 5.7-7.5 0-5.5-3.6-9.4-9.3-9.4C7 0 1.5 5 1.5 12.5c0 6.6 4.4 10 9.9 10zm-.5-7.5c-1.1 0-2-.8-2-2.5 0-2.2 1.4-4.8 3.6-4.8.8 0 1.2.3 1.9 1.2l-.8 4.5c-1 1.1-1.9 1.6-2.7 1.6z' })
    )
  );
};

exports.default = Icon;