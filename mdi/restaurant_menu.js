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
      _react2.default.createElement('path', { d: 'M8.1 13.3l2.8-2.8-7-7c-1.5 1.6-1.5 4.1 0 5.7l4.2 4.1zm6.8-1.8c1.5.7 3.7.2 5.2-1.4 2-1.9 2.3-4.6.9-6.1-1.5-1.4-4.2-1.1-6.2.8-1.6 1.6-2.1 3.8-1.3 5.3l-9.8 9.8 1.4 1.4 6.9-6.9 6.9 6.9 1.4-1.4-6.9-6.9 1.5-1.5z' })
    )
  );
};

exports.default = Icon;