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
      _react2.default.createElement('path', { d: 'M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.2 1.2 4.1 3 5.2l1-1.7c-1.2-.7-2-2-2-3.5 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5l1 1.7c1.8-1 3-3 3-5.2zM12 3C6.5 3 2 7.5 2 13c0 3.7 2 6.9 5 8.6l1-1.7C5.6 18.5 4 16 4 13c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.6 5.5-4 6.9l1 1.8c3-1.8 5-5 5-8.7 0-5.5-4.5-10-10-10z' })
    )
  );
};

exports.default = Icon;