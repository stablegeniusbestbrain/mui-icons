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
      _react2.default.createElement('path', { d: 'M12 2l2.9 5h5.8l-2.9 5 2.9 5h-5.8L12 22l-2.9-5H3.3l2.9-5-2.9-5h5.8L12 2zm5.2 13l-.6-1-.6 1h1.2zM12 6l-.6 1h1.2L12 6zm-5.2 9H8l-.6-1-.6 1zm10.4-6H16l.6 1 .6-1zM12 18l.6-1h-1.2l.6 1zM6.8 9l.6 1L8 9H6.8zm8.7 3l-1.8-3h-3.4l-1.8 3 1.8 3h3.4l1.8-3z' })
    )
  );
};

exports.default = Icon;