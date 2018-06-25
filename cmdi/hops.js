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
      _react2.default.createElement('path', { d: 'M21 12s-8.5-2-8.5-10c0 0 8.5 0 8.5 10zM3 12C3 2 11.5 2 11.5 2c0 8-8.5 10-8.5 10zm9-5.5s1 2.2 3 4c-.2 3.7-3 5.5-3 5.5s-2.8-1.8-3-5.5c2-1.8 3-4 3-4zm8.8 6.8S20 17 18 19c0 0-2.5-1.6-3.7-4.2.7-1.2 1.2-2.7 1.5-3.7 1.3 1.1 3 1.9 5 2.2zm-5.3 5c-1 2-3.5 3.5-3.5 3.5s-2.5-1.5-3.5-3.5c0 0 1.1-1 1.9-2.5.4.6 1 1 1.6 1.2.6-.2 1.2-.6 1.6-1.2.8 1.5 1.9 2.5 1.9 2.5zm-12.2-5c2-.3 3.6-1.1 4.9-2.2.3 1 .8 2.5 1.5 3.7C8.5 17.4 6 19 6 19c-2-2-2.7-5.7-2.7-5.7z' })
    )
  );
};

exports.default = Icon;