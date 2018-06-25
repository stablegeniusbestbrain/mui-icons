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
      _react2.default.createElement('path', { d: 'M22 21H2V3h2v16h2v-2h4v2h2v-3h4v3h2v-2h4v4zm-4-7h4v2h-4v-2zm-6-8h4v3h-4V6zm4 9h-4v-5h4v5zM6 10h4v2H6v-2zm4 6H6v-3h4v3z' })
    )
  );
};

exports.default = Icon;