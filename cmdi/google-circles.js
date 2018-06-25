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
      _react2.default.createElement('path', { d: 'M16.7 15h.3c1 0 2-.2 2.9-.5-.7 4.2-4.4 7.5-8.9 7.5-5 0-9-4-9-9 0-4.5 3.3-8.2 7.5-8.9C9.2 5 9 6 9 7v.3c-2.3.9-4 3.1-4 5.7 0 3.3 2.7 6 6 6 2.6 0 4.8-1.7 5.7-4zm.3-5c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-9c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z' })
    )
  );
};

exports.default = Icon;