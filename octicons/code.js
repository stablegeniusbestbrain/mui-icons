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
      _react2.default.createElement('path', { d: 'M15.8 4.5l-2.3 2.3 5.3 5.2-5.3 5.3 2.3 2.2 6.7-7.5-6.7-7.5zm-7.5 0L1.5 12l6.8 7.5 2.2-2.2L5.3 12l5.2-5.2-2.2-2.3z' })
    )
  );
};

exports.default = Icon;