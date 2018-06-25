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
      _react2.default.createElement('path', { d: 'M0 2.8l1.3-1.3 21.2 21.2-1.3 1.3-2-2H4c-1.1 0-2-.9-2-2V4.8l-2-2zM10 4v3.7l-2-2V4H6.3l-2-2H20c1.1 0 2 .9 2 2v15.7l-2-2V16h-1.7l-2-2H20v-4h-4v3.7l-2-2V10h-1.7l-2-2H14V4h-4zm6 0v4h4V4h-4zm0 16h1.2L16 18.8V20zM4 8h1.2L4 6.8V8zm6 6h1.2L10 12.8V14zm4 6v-3.2l-.8-.8H10v4h4zm-6 0v-4H4v4h4zm0-6v-3.2l-.8-.8H4v4h4z' })
    )
  );
};

exports.default = Icon;