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
      _react2.default.createElement('path', { d: 'M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm0 4.7c.5 0 .9.4.9.9v3.5l5.1 3.2v1.2l-5.1-1.6v3.5l1.3 1v.9l-2.2-.6-2.2.6v-.9l1.3-1v-3.5L6 14.5v-1.2l5.1-3.2V6.6c0-.5.4-.9.9-.9z' })
    )
  );
};

exports.default = Icon;