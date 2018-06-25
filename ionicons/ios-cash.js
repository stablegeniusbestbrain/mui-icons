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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M40 368h432v16H40zm8 32h416v16H48zm208-232c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z' }),
        _react2.default.createElement('path', { d: 'M32 96v256h448V96H32zm96 224H64v-16h64v16zm0-176H64v-16h64v16zm128 152c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72zm192 24h-64v-16h64v16zm0-176h-64v-16h64v16z' })
      )
    )
  );
};

exports.default = Icon;