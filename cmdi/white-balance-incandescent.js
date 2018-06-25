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
      _react2.default.createElement('path', { d: 'M17.2 18.2L19 20l1.5-1.5-1.8-1.8m1.3-4.2h3v-2h-3m-5-4.2V1.5H9v4.8c-1.8 1-3 3-3 5.2 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.2-1.2-4.2-3-5.2zM4 10.5H1v2h3m7 9.9c.3.1 2 0 2 0v-2.9h-2m-7.5-1L5 20l1.8-1.8-1.5-1.5-1.8 1.8z' })
    )
  );
};

exports.default = Icon;