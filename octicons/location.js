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
      _react2.default.createElement('path', { d: 'M12 0C7 0 3 3.8 3 8.3 3 15 12 24 12 24s9-9 9-15.7C21 3.8 17 0 12 0zm0 21.8c-2.8-3-7.5-9.1-7.5-13.5 0-3.8 3.4-6.8 7.5-6.8 2 0 3.9.7 5.3 2s2.2 3 2.2 4.8c0 4.4-4.7 10.5-7.5 13.5zm3-13.5c0 1.6-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3s3 1.3 3 3z' })
    )
  );
};

exports.default = Icon;