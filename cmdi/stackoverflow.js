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
      _react2.default.createElement('path', { d: 'M17.4 20.2v-5.4h1.8V22H3v-7.2h1.8v5.4h12.6zM6.8 14.3l.3-1.7 8.8 1.8-.3 1.8-8.8-1.9zm1.1-4.2l.8-1.6 8.1 3.8-.7 1.6-8.2-3.8zm2.3-4l1.1-1.4 6.9 5.8-1.1 1.4-6.9-5.8zm4.4-4.2L20 9.1l-1.4 1-5.4-7.2 1.4-1zm-8 16.5v-1.8h9v1.8h-9z' })
    )
  );
};

exports.default = Icon;