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
      _react2.default.createElement('path', { d: 'M12 5.8L15.2 9l1.4-1.4L12 3 7.4 7.6 8.8 9 12 5.8zm0 12.4L8.8 15l-1.4 1.4L12 21l4.6-4.6-1.4-1.4-3.2 3.2z' })
    )
  );
};

exports.default = Icon;