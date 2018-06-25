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
      _react2.default.createElement('path', { d: 'M10.7 5.3C7.1 7.6 5.3 10 5.3 14H6c1.9 0 3.7 1.3 3.7 3.6 0 2.4-1.5 3.9-3.7 3.9-2.9 0-4.5-2.3-4.5-6.4C1.5 9.4 4.1 5.3 9 2.5l1.7 2.8zm10.5 0c-3.6 2.3-5.4 4.7-5.4 8.7h.7c1.9 0 3.7 1.3 3.7 3.6 0 2.4-1.5 3.9-3.7 3.9-2.8 0-4.5-2.3-4.5-6.4 0-5.7 2.6-9.8 7.5-12.6l1.8 2.8h-.1z' })
    )
  );
};

exports.default = Icon;