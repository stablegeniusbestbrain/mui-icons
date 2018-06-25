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
        _react2.default.createElement('path', { d: 'M188.8 255.925c0 36.946 30.243 67.178 67.2 67.178s67.2-30.23 67.2-67.178c0-36.945-30.243-67.18-67.2-67.18s-67.2 30.235-67.2 67.18z' }),
        _react2.default.createElement('path', { d: 'M476.752 217.795c-.01.005-.016.038-.024.042-1.7-9.877-4.04-19.838-6.99-28.838h-.106c2.983 9 5.352 19 7.072 29h-.002c-1.72-10-4.088-20-7.07-29h-155.39c19.044 17 31.358 40.174 31.358 67.05 0 16.797-4.484 31.285-12.314 44.725L231.044 478.452s-.01.264-.014.264l-.01.284h.015l-.005-.262c8.203.92 16.53 1.262 24.97 1.262 6.842 0 13.61-.393 20.3-1.002a223.86 223.86 0 0 0 29.776-4.733C405.68 451.525 480 362.405 480 255.94a225.35 225.35 0 0 0-3.248-38.145z' }),
        _react2.default.createElement('path', { d: 'M256 345.496c-33.6 0-61.6-17.91-77.285-44.785L76.005 123.048l-.136-.236a223.516 223.516 0 0 0-25.904 45.124C38.406 194.944 32 224.686 32 255.924c0 62.696 25.784 119.36 67.316 160.01 29.342 28.72 66.545 49.433 108.088 58.62l.03-.052 77.682-134.604c-8.96 3.358-19.03 5.598-29.116 5.598z' }),
        _react2.default.createElement('path', { d: 'M91.292 104.575l77.35 133.25C176.482 197.513 212.315 166 256 166h205.172c-6.92-15-15.594-30.324-25.78-43.938.04.02.08.053.118.074C445.644 135.712 454.278 151 461.172 166h.172c-6.884-15-15.514-30.38-25.668-43.99-.115-.06-.23-.168-.342-.257C394.474 67.267 329.36 32 256 32c-26.372 0-51.673 4.57-75.172 12.936-34.615 12.327-65.303 32.917-89.687 59.406l.143.243.01-.01z' })
      )
    )
  );
};

exports.default = Icon;