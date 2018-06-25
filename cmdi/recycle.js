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
      _react2.default.createElement('path', { d: 'M21.8 15.4l-2.5 4.4c-.5.8-1.4 1.3-2.3 1.2h-2v2l-2.5-4.5L15 14v2h2.8l-2.2-3.8 4.3-2.5 1.8 3.1c.5.7.6 1.8.1 2.6zM9.2 3.1h5c1 0 1.8.5 2.3 1.4l1 1.7 1.7-1-2.7 4.4-5.1.1 1.7-1-1.4-2.5-2.2 3.9-4.3-2.5L7 4.5c.4-.9 1.2-1.4 2.2-1.4zM5.1 19.8l-2.5-4.4c-.5-.8-.5-1.8 0-2.6l1-1.7-1.7-1h5.2l2.6 4.5-1.7-1L6.6 16H11v5H7.4c-.9.1-1.8-.4-2.3-1.2z' })
    )
  );
};

exports.default = Icon;