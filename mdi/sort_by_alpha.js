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
      _react2.default.createElement('path', { d: 'M14.9 4.7h-4.7l2.4-2.4zm-4.6 14.7h4.6l-2.3 2.3zM6.1 6.3L1.6 17.7h1.8l1-2.4h5.1l.9 2.4h1.8L7.7 6.3H6.1zM5 13.6l1.9-5.1 1.9 5.1H5zm10.7 2.5h6.2v1.6h-8.6v-1.3l5.9-8.5h-5.8V6.3h8.3v1.2l-6 8.6z' })
    )
  );
};

exports.default = Icon;