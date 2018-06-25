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
      _react2.default.createElement('path', { d: 'M12 1C8.1 1 5 4.1 5 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 2.2c2.7 0 4.8 2.1 4.8 4.8 0 2.7-2.1 4.9-4.8 4.9-2.7 0-4.9-2.2-4.9-4.9S9.3 3.2 12 3.2zM11 5v3.7l3.2 1.8.7-1.3-2.4-1.4V5M4 16v8h2v-3h12v3l4-4-4-4v3H6v-3' })
    )
  );
};

exports.default = Icon;