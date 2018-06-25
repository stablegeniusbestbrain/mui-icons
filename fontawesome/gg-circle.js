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
      _react2.default.createElement('path', { d: 'M9.6 18.1l3.6-3.6-3.7-3.7-1.2 1.1 2.6 2.6-1.3 1.3-3.7-3.7 3.7-3.8.5.6 1.2-1.2L9.6 6l-6.1 6.1zm4.8-.1l6.1-6.1-6.1-6-3.6 3.6 3.7 3.7 1.2-1.1-2.6-2.6 1.3-1.3 3.7 3.7-3.7 3.8-.5-.6-1.2 1.2zm9.6-6q0 2.4-1 4.7t-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0t4.7 1 3.8 2.5T23 7.3t1 4.7z' })
    )
  );
};

exports.default = Icon;