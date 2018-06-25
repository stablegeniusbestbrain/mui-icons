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
        _react2.default.createElement('path', { d: 'M32 400h448v16H32zm168-16h80c8.8 0 58-12 94.7-80.4 3.1.3 6.2.4 9.3.4 53 0 96-39.4 96-88 0-38.6-27.1-71.4-64.9-83.3.6-11.7.9-23.9.9-36.7H64c0 256 121 288 136 288zm264-168c0 39.7-35.9 72-80 72h-1.6c15.2-33.6 27.2-78.6 31.7-138.7C443.3 160 464 185.9 464 216z' })
      )
    )
  );
};

exports.default = Icon;