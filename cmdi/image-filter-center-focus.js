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
      _react2.default.createElement('path', { d: 'M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm7 10h-4v2h4c1.1 0 2-.9 2-2v-4h-2m0-12h-4v2h4v4h2V5c0-1.1-.9-2-2-2zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2m0 6H3v4c0 1.1.9 2 2 2h4v-2H5v-4z' })
    )
  );
};

exports.default = Icon;