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
      _react2.default.createElement('path', { d: 'M2 2v6h2.3l1.3 8H4v6h6v-1.9h5V22h6v-6h-1.8l.8-7h2V3h-6v3.5L14.8 8H9.6L8 5.8V2M4 4h2v2H4m14-1h2v2h-2M6.3 8h.8L9 10.6V14h6v-3.1L16.6 9H18l-.8 7H15v2.1h-5V16H7.6m3.4-6h2v2h-2m-5 6h2v2H6m11-2h2v2h-2' })
    )
  );
};

exports.default = Icon;