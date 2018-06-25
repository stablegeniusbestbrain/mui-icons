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
        _react2.default.createElement('path', { d: 'M213.573 256h84.846l-42.428-89.356z' }),
        _react2.default.createElement('path', { d: 'M255.98 32L32 112l46.12 272L256 480l177.75-96L480 112 255.98 32zM344 352l-26.59-56H194.585L168 352h-40L256 72l128 280h-40z' })
      )
    )
  );
};

exports.default = Icon;