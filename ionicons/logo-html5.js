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
        _react2.default.createElement('path', { d: 'M64 32l34.936 403.213L255.77 480l157.244-44.854L448 32H64zm307.997 132h-184l3.99 51h176.01L354.49 366.386l-98.5 28.094-98.68-27.976L150.544 289H198.8l3.422 39.287 53.77 14.78 53.42-14.914L314.988 264h-167l-12.572-149.59 240.79.017-4.21 49.573z' })
      )
    )
  );
};

exports.default = Icon;