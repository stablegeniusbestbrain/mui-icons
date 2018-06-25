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
      _react2.default.createElement('path', { d: 'M7.5 21.5c-3.2-1.6-5.6-4.7-5.9-8.5H.1C.6 19.2 5.7 24 12 24h.7l-3.9-3.8m6 1l-12-12 6.4-6.4 12 12m-11-13c-.6-.6-1.5-.6-2.1 0L1.8 8.1c-.6.6-.6 1.5 0 2.1l12 12.1c.6.5 1.5.5 2.1 0l6.4-6.4c.5-.6.5-1.5 0-2.1l-12.1-12zm6.3.7c3.3 1.6 5.6 4.7 5.9 8.5h1.5C23.4 4.8 18.3 0 12 0h-.7l3.9 3.8 1.3-1.3z' })
    )
  );
};

exports.default = Icon;